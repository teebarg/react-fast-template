import secrets
from typing import Any, List, Optional

from pydantic import AnyHttpUrl, EmailStr, PostgresDsn, ValidationInfo, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    ACCESS_TOKEN_EXPIRE_MINUTES: int = (
        60 * 24 * 8
    )  # 60 minutes * 24 hours * 8 days = 8 days
    API_V1_STR: str = "/api"
    SECRET_KEY: str = secrets.token_urlsafe(32)

    PROJECT_NAME: str
    FIREBASE_CRED: dict = {}

    POSTGRES_SERVER: str
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "postgres"
    STORAGE_BUCKET: str = "bucket"
    SQLALCHEMY_DATABASE_URI: str | None = None

    @field_validator("SQLALCHEMY_DATABASE_URI", mode="before")
    def assemble_db_connection(cls, v: Optional[str], info: ValidationInfo) -> Any:
        if isinstance(v, str):
            return v
        return str(
            PostgresDsn.build(
                scheme="postgresql",
                username=info.data.get("POSTGRES_USER"),
                password=info.data.get("POSTGRES_PASSWORD"),
                host=info.data.get("POSTGRES_SERVER"),
                path=f"{info.data.get('POSTGRES_DB') or ''}",
            )
        )

    EMAIL_TEST_USER: EmailStr = "test@example.com"  # type: ignore
    FIRST_SUPERUSER_FIRSTNAME: str = "admin"
    FIRST_SUPERUSER_LASTNAME: str = "admin"
    FIRST_SUPERUSER: EmailStr = "admin@email.com"
    FIRST_SUPERUSER_PASSWORD: str = "password"
    USERS_OPEN_REGISTRATION: bool = False

    # BACKEND_CORS_ORIGINS is a JSON-formatted list of origins
    # e.g: '["http://localhost", "http://localhost:4200", "http://localhost:3000", \
    # "http://localhost:8080", "http://local.dockertoolbox.tiangolo.com"]'
    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
