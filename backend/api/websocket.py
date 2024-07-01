import logging
from typing import Dict

from fastapi import APIRouter, WebSocket, WebSocketDisconnect


class ConnectionManager:
    def __init__(self):
        self.connections: Dict[str, list[WebSocket]] = {}

    async def connect(self, id: str, websocket: WebSocket) -> None:
        """
        Establishes a WebSocket connection and adds it to the list of active connections.

        Parameters:
        - websocket: The WebSocket object representing the connection.

        Returns:
        - None
        """
        await websocket.accept()
        conns = self.connections.get(id, [])
        conns.append(websocket)
        self.connections.update({id: conns})

    def disconnect(self, websocket: WebSocket) -> None:
        """
        Disconnects a WebSocket connection.

        Parameters:
        - websocket (WebSocket): The WebSocket connection to be disconnected.

        Returns:
        None
        """
        for key in self.connections:
            self.connections[key].remove(websocket)

    async def broadcast(self, id: str, data: dict) -> None:
        """
        Broadcasts the given data to all active connections.

        Args:
            data (dict): The data to be sent as a JSON object.

        Returns:
            None
        """
        for connection in self.connections.get(id, []):
            await connection.send_json(data)

    async def send_personal_message(self, message: str, user_id: str):
        if user_id in self.active_connections:
            websocket = self.active_connections[user_id]
            await websocket.send_text(message)


manager = ConnectionManager()

router = APIRouter()
logger = logging.getLogger(__name__)


@router.websocket("/users/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    """
    Handles the WebSocket endpoint.

    Args:
        websocket (WebSocket): The WebSocket connection.

    Returns:
        None
    """
    await manager.connect(id=user_id, websocket=websocket)
    try:
        await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(websocket)

import aio_pika
import json

@app.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    await manager.connect(user_id, websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(user_id)

async def consume_events():
    connection = await aio_pika.connect_robust("amqp://rabbitmq")
    channel = await connection.channel()
    queue = await channel.declare_queue("new_user")

    async with queue.iterator() as queue_iter:
        async for message in queue_iter:
            async with message.process():
                event = json.loads(message.body)
                print("🚀 ~ event:", event)
                await manager.broadcast(id="beaf", data={"message": "yooooo"})
