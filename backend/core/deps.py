from typing import Annotated, Generator, Union

from core import security
from models.token import TokenPayload
import jwt
import firebase_admin
from fastapi import Depends, HTTPException, status, Cookie
from jwt.exceptions import InvalidTokenError
from pydantic import ValidationError
from fastapi.security import APIKeyHeader, OAuth2PasswordBearer
from firebase_admin import credentials, storage
from sqlmodel import Session

from core.config import settings
from core.logging import logger
from db.engine import engine
from models.user import User

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl="/auth/login/password")


def get_db() -> Generator:
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_db)]
TokenDep = Annotated[str, Depends(reusable_oauth2)]
# TokenDep2 = Annotated[str, Depends(APIKeyHeader(name="X-Auth"))]
TokenDep2 = Annotated[Union[str, None], Cookie()]


def get_storage() -> Generator:
    try:
        if not firebase_admin._apps:  # Check if the app is not already initialized
            cred = credentials.Certificate(settings.FIREBASE_CRED)
            firebase_admin.initialize_app(
                cred, {"storageBucket": settings.STORAGE_BUCKET}
            )

        # Get a reference to the bucket
        yield storage.bucket()
    except Exception as e:
        logger.error(f"storage init error, {e}")
        raise
    finally:
        logger.debug("storage closed")


def get_current_user(session: SessionDep, token: TokenDep2) -> User:
    try:
        payload = jwt.decode(
            token, settings.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        token_data = TokenPayload(**payload)
    except (InvalidTokenError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )
    user = session.get(User, token_data.sub)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return user


def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
) -> User:
    if not current_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthenticated user"
        )
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


CurrentUser = Annotated[User, Depends(get_current_user)]
