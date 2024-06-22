from typing import Any, Dict, Optional, Union

from sqlmodel import Session, select

import schemas
from crud.base import CRUDBase
from models.user import User
from core.security import get_password_hash, verify_password


class CRUDUser(CRUDBase[User, schemas.UserCreate, schemas.UserUpdate]):
    def create(self, session: Session, user_create: schemas.UserCreate) -> User:
        db_obj = User.model_validate(
            user_create,
            update={"hashed_password": get_password_hash(user_create.password)},
        )
        session.add(db_obj)
        session.commit()
        session.refresh(db_obj)
        return db_obj

    def authenticate(
        self, *, session: Session, email: str, password: str
    ) -> User | None:
        # sourcery skip: assign-if-exp, reintroduce-else, swap-if-else-branches, use-named-expression
        db_user = self.get_user_by_email(session=session, email=email)
        if not db_user:
            return None
        if not verify_password(password, db_user.hashed_password):
            return None
        return db_user

    def get_user_by_email(self, *, session: Session, email: str) -> User | None:
        statement = select(User).where(User.email == email)
        return session.exec(statement).first()

    def update(
        self,
        db: Session,
        *,
        db_obj: User,
        obj_in: Union[schemas.UserUpdate, Dict[str, Any]]
    ) -> User:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        return super().update(db, db_obj=db_obj, obj_in=update_data)

    def is_active(self, user: User) -> bool:
        return user.is_active

    def is_superuser(self, user: User) -> bool:
        return user.is_superuser


user = CRUDUser(User)
