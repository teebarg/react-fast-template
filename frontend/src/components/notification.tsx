import React, { useEffect, useState } from "react";

const NotificationComponent = ({ userId }: { userId: string }) => {
    const [notifications, setNotifications] = useState<any[]>([]);

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8004/ws/${userId}`);

        ws.onmessage = (event) => {
            const message = event.data;
            setNotifications((prev) => [...prev, message]);
        };

        return () => ws.close();
    }, [userId]);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationComponent;
