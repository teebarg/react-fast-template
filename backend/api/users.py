import asyncio
import json
import uuid
from typing import Annotated, Any, Dict

import pandas as pd
from fastapi import (
    APIRouter,
    Depends,
    File,
    HTTPException,
    Query,
    UploadFile,
    WebSocket,
    WebSocketDisconnect,
)
from pydantic import BaseModel
from sqlmodel import func, or_, select

import crud
from core import deps
from core.config import settings
from core.deps import (
    CurrentUser,
    SessionDep,
    get_current_active_superuser,
)
from core.security import get_password_hash, verify_password
from core.utils import generate_new_account_email, send_email
from models.message import Message
from models.user import (
    UpdatePassword,
    User,
    UserCreate,
    UserPublic,
    UsersPublic,
    UserUpdate,
    UserUpdateMe,
)
from core.logging import logger

# Create a router for users
router = APIRouter()


@router.get("/admin-me")
async def read_admin(admin_user: deps.AdminUser) -> User:
    """
    Get current admin user.
    """
    return admin_user  # type: ignore


@router.get("/me")
async def read_user_me(current_user: deps.CurrentUser) -> UserPublic:
    """
    Get current user.
    """
    return current_user  # type: ignore


@router.get(
    "/",
    dependencies=[Depends(get_current_active_superuser)],
    response_model=UsersPublic,
)
def read_users(
    db: SessionDep,
    name: str = "",
    page: int = Query(default=1, gt=0),
    per_page: int = Query(default=20, le=100),
) -> Any:
    """
    Retrieve users.
    """

    query = {"firstname": name, "lastname": name}
    filters = crud.user.build_query(query)

    count_statement = select(func.count()).select_from(User)
    if filters:
        count_statement = count_statement.where(or_(*filters))
    total_count = db.exec(count_statement).one()

    users = crud.user.get_multi(
        db=db,
        filters=filters,
        per_page=per_page,
        offset=(page - 1) * per_page,
    )

    total_pages = (total_count // per_page) + (total_count % per_page > 0)

    return UsersPublic(
        data=users,
        page=page,
        per_page=per_page,
        total_pages=total_pages,
        total_count=total_count,
    )


@router.post(
    "/", dependencies=[Depends(get_current_active_superuser)], response_model=UserPublic
)
def create_user(*, db: SessionDep, user_in: UserCreate) -> Any:
    """
    Create new user.
    """
    user = crud.user.get_user_by_email(db=db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )

    user = crud.user.create(db=db, user_create=user_in)
    if settings.EMAILS_ENABLED and user_in.email:
        email_data = generate_new_account_email(
            email_to=user_in.email, username=user_in.email, password=user_in.password
        )
        send_email(
            email_to=user_in.email,
            subject=email_data.subject,
            html_content=email_data.html_content,
        )
    return user


@router.patch("/me", response_model=UserPublic)
def update_user_me(
    *, db: SessionDep, user_in: UserUpdateMe, current_user: CurrentUser
) -> Any:
    """
    Update own user.
    """

    if user_in.email:
        existing_user = crud.user.get_user_by_email(db=db, email=user_in.email)
        if existing_user and existing_user.id != current_user.id:
            raise HTTPException(
                status_code=409, detail="User with this email already exists"
            )
    current_user = crud.user.update(db=db, db_obj=current_user, obj_in=user_in)
    return current_user


@router.patch("/me/password")
def update_password_me(
    *, session: SessionDep, body: UpdatePassword, current_user: CurrentUser
) -> Any:
    """
    Update own password.
    """
    if not verify_password(body.current_password, current_user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect password")
    if body.current_password == body.new_password:
        raise HTTPException(
            status_code=400, detail="New password cannot be the same as the current one"
        )
    hashed_password = get_password_hash(body.new_password)
    current_user.hashed_password = hashed_password
    session.add(current_user)
    session.commit()
    return {"message": "Password updated successfully"}


@router.get("/{user_id}", response_model=UserPublic)
def read_user_by_id(
    user_id: int, session: SessionDep, current_user: CurrentUser
) -> Any:
    """
    Get a specific user by id.
    """
    user = session.get(User, user_id)
    if user == current_user:
        return user
    if not current_user.is_superuser:
        raise HTTPException(
            status_code=403,
            detail="The user doesn't have enough privileges",
        )
    return user


@router.patch(
    "/{user_id}",
    dependencies=[Depends(get_current_active_superuser)],
    response_model=UserPublic,
)
def update_user(
    *,
    db: SessionDep,
    user_id: int,
    user_in: UserUpdate,
) -> Any:
    """
    Update a user.
    """

    db_user = db.get(User, user_id)
    if not db_user:
        raise HTTPException(
            status_code=404,
            detail="The user with this id does not exist in the system",
        )
    if user_in.email:
        existing_user = crud.user.get_user_by_email(db=db, email=user_in.email)
        if existing_user and existing_user.id != user_id:
            raise HTTPException(
                status_code=409, detail="User with this email already exists"
            )

    db_user = crud.user.update(db=db, db_obj=db_user, user_in=user_in)
    return db_user


@router.delete("/{user_id}", dependencies=[Depends(get_current_active_superuser)])
def delete_user(db: SessionDep, current_user: CurrentUser, user_id: int) -> Message:
    """
    Delete a user.
    """
    user = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if user == current_user:
        raise HTTPException(
            status_code=403, detail="Super users are not allowed to delete themselves"
        )
    db.delete(user)
    db.commit()
    return Message(message="User deleted successfully")


class UploadStatus(BaseModel):
    total_rows: int
    processed_rows: int
    status: str


upload_statuses: Dict[str, UploadStatus] = {}
active_connections: Dict[str, WebSocket] = {}


async def process_chunk(chunk: pd.DataFrame, task_id: str, db: SessionDep):
    try:
        products = chunk.to_dict("records")
        for item in products:
            crud.user.create(db=db, user_create=item)
        upload_statuses[task_id].processed_rows += len(products)
        await send_status_update(task_id)
    except Exception as e:
        upload_statuses[task_id].status = f"Error: {str(e)}"
        await send_status_update(task_id)


async def process_file(file: UploadFile, task_id: str):
    chunk_size = 1000
    try:
        # contents = await file.read()
        df = pd.read_excel(file.file, engine='openpyxl')
        total_rows = len(df)
        upload_statuses[task_id] = UploadStatus(total_rows=total_rows, processed_rows=0, status="Processing")
        await send_status_update(task_id)

        for i in range(0, total_rows, chunk_size):
            chunk = df.iloc[i : i + chunk_size]
            await process_chunk(chunk, task_id)
            await asyncio.sleep(0.1)  # Allow other tasks to run

        upload_statuses[task_id].status = "Completed"
        await send_status_update(task_id)
    except Exception as e:
        logger.error("🚀 ~ e:", e)
        upload_statuses[task_id].status = f"Error: {str(e)}"
        await send_status_update(task_id)


async def send_status_update(task_id: str):
    if task_id in active_connections:
        await active_connections[task_id].send_text(
            json.dumps(upload_statuses[task_id].model_dump())
        )


@router.post("/excel")
async def upload_products(fileb: UploadFile, file: Annotated[UploadFile, File()]):
    if file is None:
        return {"error": "No file provided"}

    file = File(file)
    task_id = str(uuid.uuid4())
    asyncio.create_task(process_file(file, task_id))
    return {"task_id": task_id, "message": "File upload started"}


@router.websocket("/ws/{task_id}")
async def websocket_endpoint(websocket: WebSocket, task_id: str):
    await websocket.accept()
    active_connections[task_id] = websocket
    try:
        while True:
            await websocket.receive_text()
            if task_id in upload_statuses:
                await send_status_update(task_id)
    except WebSocketDisconnect:
        del active_connections[task_id]
