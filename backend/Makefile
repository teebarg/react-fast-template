# Variables
PROJECT_SLUG := react-fast-template
APP_NAME := $(PROJECT_SLUG)-backend
PORT := 4012

# Targets
build:
	docker build -t $(APP_NAME) .

run:
	docker run -p $(PORT):8000 --name $(APP_NAME) -v /Users/user/Documents/gigs/niyi/lab/react-fast-template/backend:/app:ro $(APP_NAME)

stop:
	docker stop $(APP_NAME)
	docker rm $(APP_NAME)

dev:
	uvicorn main:app --host 0.0.0.0 --port $(PORT)  --reload

format:
	black .
	ruff --fix .
