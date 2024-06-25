from typing import Any, Dict, Optional, Union

from sqlmodel import Session, select

import schemas
from crud.base import CRUDBase
from models.user import User, UserUpdate
from core.security import get_password_hash, verify_password


class CRUDUser(CRUDBase[User, schemas.UserCreate, schemas.UserUpdate]):
    def create(self, db: Session, user_create: schemas.UserCreate) -> User:
        db_obj = User.model_validate(
            user_create,
            update={"hashed_password": get_password_hash(user_create.password)},
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def authenticate(self, *, db: Session, email: str, password: str) -> User | None:
        # sourcery skip: assign-if-exp, reintroduce-else, swap-if-else-branches, use-named-expression
        db_user = self.get_user_by_email(db=db, email=email)
        if not db_user:
            return None
        if not verify_password(password, db_user.hashed_password):
            return None
        return db_user

    def get_user_by_email(self, *, db: Session, email: str) -> User | None:
        statement = select(User).where(User.email == email)
        return db.exec(statement).first()

    def update(self, *, db: Session, db_obj: User, user_in: UserUpdate) -> User:
        user_data = user_in.model_dump(exclude_unset=True)
        extra_data = {}
        if "password" in user_data:
            password = user_data["password"]
            hashed_password = get_password_hash(password)
            extra_data["hashed_password"] = hashed_password
        db_obj.sqlmodel_update(user_data, update=extra_data)
        return self.sync(db=db, update=db_obj, type="update")

    def is_active(self, user: User) -> bool:
        return user.is_active

    def is_superuser(self, user: User) -> bool:
        return user.is_superuser


user = CRUDUser(User)
