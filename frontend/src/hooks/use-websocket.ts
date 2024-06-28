import { useState } from "react";

interface Props {
    onOpen?: () => void;
    onClose?: () => void;
}

const useWebSocket = ({ onOpen, onClose }: Props) => {
    const [socket, setSocket] = useState<WebSocket>();
    const [messages, setMessages] = useState<any[]>([]);
    const [error, setError] = useState<Event>();

    const connect = async (url: string) => {
        const domain = import.meta.env.DEV ? "ws://localhost:4010" : `wss://${import.meta.env.VITE_DOMAIN}`;

        const socket = new WebSocket(`${domain}${url}`);

        socket.onopen = () => {
            // socket.send(JSON.stringify({ type: "auth", token: "jwt token" }));
            if (typeof onOpen === "function") {
                onOpen();
            }
        };

        socket.onmessage = (event) => {
            setMessages((prev: any[]) => [...prev, JSON.parse(event.data)]);
        };

        socket.onclose = () => {
            if (typeof onClose === "function") {
                onClose();
            }
        };

        socket.onerror = (error) => {
            setError(error);
        };

        setSocket(socket);
    };

    const disconnect = () => {
        if (socket) {
            socket.close();
        }
    };

    const sendMessage = (message: string) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        }
    };

    return {
        messages,
        error,
        connect,
        disconnect,
        sendMessage,
    };
};

export { useWebSocket };
