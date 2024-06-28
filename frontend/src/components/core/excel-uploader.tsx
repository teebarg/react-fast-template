import React, { useEffect, useRef, useState } from "react";
import userService from "@/services/user.service";
import useNotifications from "@/store/notifications";
import { useWebSocket } from "@/hooks/use-websocket";
import { Button, Progress } from "@nextui-org/react";
import { CancelIcon } from "nui-react-icons";

interface Props {
    onConfirm?: () => void;
    onClose?: () => void;
    onError?: (error: string) => void;
}

const Excel: React.FC<Props> = () => {
    const id = "beaf";
    const fileInput = useRef<any>(null);
    const [, notificationsActions] = useNotifications();
    const [file, setFile] = useState<File>();
    const [status, setStatus] = useState<boolean>(false);
    const { messages: wsMessages, connect: initializeWebsocket, disconnect: disconnectWebsocket } = useWebSocket({ url: `/api/ws/users/${id}` });

    const currentMessage = wsMessages[wsMessages.length - 1];

    useEffect(() => {
        initializeWebsocket();
        return () => {
            disconnectWebsocket();
        };
    }, []);

    const currentStatus = () => {
        if (status) {
            return "Submitting";
        }
        return currentMessage?.status == "Processing" ? "Processing" : "Submit";
    };

    const notify = (message: string, type: string = "success") => {
        notificationsActions.push({
            options: { type },
            message,
        });
    };
    const handleClick = () => {
        fileInput?.current?.click();
    };

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        // Check file size (in kilobytes)
        const maxFileSize = 1500;
        if (selectedFile.size > maxFileSize * 1024) {
            notify(`File size exceeds ${maxFileSize} KB`, "danger");
            return;
        }

        setFile(selectedFile);
    };

    const handleCancel = () => {
        setFile(undefined);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!file) {
            notify("Please select a file", "danger");
            return;
        }
        setStatus(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("batch", "batch1");

        try {
            await userService.excelUpload({ id, formData });
        } catch (error) {
            notify(`Error uploading file: ${error}`, "danger");
        } finally {
            setStatus(false);
        }
    };

    return (
        <React.Fragment>
            <div className="flex gap-2">
                <div className="min-w-96 max-w-md bg-content2 p-4 rounded-md shadow-md relative border-dashed border-2 border-sky-500 min-h-[10rem]">
                    <div className="mb-4">
                        {file && (
                            <button type="button" className="absolute top-3 right-4" onClick={handleCancel}>
                                <CancelIcon size={24} aria-hidden="true" />
                            </button>
                        )}
                        {file && <p className="text-sm mb-1 absolute top-3 left-4">{file?.name}</p>}
                        <input ref={fileInput} type="file" id="file" accept=".xlsx, .xls" onChange={handleFileChange} className="hidden" />
                        <div className="text-center space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" viewBox="0 0 24 24" className="h-16 w-16 inline">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z" />
                            </svg>
                            <p>
                                Drop your images here or{" "}
                                <button onClick={handleClick} className="link">
                                    browse.
                                </button>
                            </p>
                            <Button
                                onClick={handleClick}
                                isDisabled={status || currentMessage?.status == "Processing"}
                                variant="shadow"
                                color="primary"
                                className="min-w-48"
                            >
                                Upload
                            </Button>
                        </div>
                    </div>
                </div>
                <Button
                    onClick={handleSubmit}
                    isDisabled={status || currentMessage?.status == "Processing"}
                    isLoading={status || currentMessage?.status == "Processing"}
                    variant="shadow"
                    color="secondary"
                    className="min-w-48"
                >
                    {currentStatus()}
                </Button>
            </div>
            <div className="mt-8">
                {wsMessages && (
                    <Progress
                        aria-label="Downloading..."
                        size="sm"
                        value={(currentMessage?.processed_rows / currentMessage?.total_rows) * 100 || 0}
                        color="success"
                        label={`Progress: ${currentMessage?.processed_rows || 0} / ${currentMessage?.total_rows || 0} rows`}
                        showValueLabel={true}
                        className=""
                    />
                )}
            </div>
        </React.Fragment>
    );
};

export { Excel };