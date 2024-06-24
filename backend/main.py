from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth import router as auth_router
from api.users import router as users_router
from core.config import settings
from datetime import datetime
import json

app = FastAPI(title=settings.PROJECT_NAME, openapi_url="/api/openapi.json")

# Mount the routers under their respective paths
app.include_router(
    users_router, prefix="/api/users", tags=["users"]
)  # Include the user router
app.include_router(
    auth_router, prefix="/api/auth", tags=["auth"]
)  # Include the user router

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # See https://github.com/pydantic/pydantic/issues/7186 for reason of using rstrip
        str(origin).rstrip("/")
        for origin in settings.BACKEND_CORS_ORIGINS
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Root path
@app.get("/")
async def root():
    return {"message": "Hello World!!!"}


@app.get("/api/health-check")
async def health_check():
    return {"message": "Server is running"}


class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)


app.json_encoder = CustomJSONEncoder
