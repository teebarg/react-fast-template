import React, { useEffect, useState } from "react";
import userService from "@/services/user.service";
import useNotifications from "@/store/notifications";
import { useWebSocket } from "@/hooks/use-websocket";

interface Props {
    onConfirm?: () => void;
    onClose?: () => void;
}

const Excel: React.FC<Props> = () => {
    const [, notificationsActions] = useNotifications();
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const { messages: wsMessages, connect: initializeWebsocket, disconnect: disconnectWebsocket } = useWebSocket({ url: "/api/users/ws/beaf" });

    useEffect(() => {
        initializeWebsocket();
        return () => {
            disconnectWebsocket();
        };
    }, []);

    const handleFileChange = (e: any) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            setMessage("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            await userService.excelUpload(formData);
            notificationsActions.push({
                options: {
                    type: "success",
                },
                message: `Document uploaded successfully`,
            });
        } catch (error) {
            setMessage(`Error uploading file: ${error}`);
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4">Upload Products</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                        Excel File
                    </label>
                    <input
                        type="file"
                        id="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Upload
                </button>
            </form>
            {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
            {wsMessages && (
                <div className="mt-4">
                    <p className="text-sm text-gray-600">
                        Progress: {wsMessages[wsMessages.length - 1]?.processed_rows} / {wsMessages[wsMessages.length - 1]?.total_rows} rows
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                                width: `${
                                    (wsMessages[wsMessages.length - 1]?.processed_rows / wsMessages[wsMessages.length - 1]?.total_rows) * 100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Excel };
