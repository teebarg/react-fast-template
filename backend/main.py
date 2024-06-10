from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.auth import router as auth_router
from api.users import router as users_router
from core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# Mount the routers under their respective paths
app.include_router(
    users_router, prefix="/api/users", tags=["users"]
)  # Include the user router
app.include_router(
    auth_router, prefix="/api/auth", tags=["auth"]
)  # Include the user router

# List of allowed origins
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:4010",
    "https://react-pwa.niyi.com.ng"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific origins
    allow_credentials=True,  # Allows cookies to be included in requests
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


# Root path
@app.get("/")
async def root():
    return {"message": "Hello World!!!"}


@app.get("/api/health-check")
async def health_check():
    return {"message": "Server is running"}
