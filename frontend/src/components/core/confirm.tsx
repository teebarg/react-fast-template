import React, { useState } from "react";
import { useActionData, useRevalidator } from "react-router-dom";
import { Button } from "@nextui-org/react";
import useNotifications from "@/store/notifications";
import useWatch from "@/hooks/use-watch";

interface Props {
    onClose?: () => void;
}

const Confirm: React.FC<Props> = ({ onClose }) => {
    const revalidator = useRevalidator();
    const [isPending, setIsPending] = useState<boolean>(false);

    const actionData = useActionData() as { error: string } | undefined;
    const [, notificationsActions] = useNotifications();

    useWatch(actionData, (newData) => {
        notificationsActions.push({
            options: {
                type: "danger",
            },
            message: newData?.error,
        });
    });

    const onSubmit = async () => {
        setIsPending(true);
        try {
            revalidator.revalidate();
            notificationsActions.push({
                options: {
                    type: "success",
                },
                message: `User deleted successfully`,
            });
        } catch (error) {
            notificationsActions.push({
                options: {
                    type: "danger",
                },
                message: `An error occurred: ${error}`,
            });
        } finally {
            setIsPending(false);
        }
    };
    return (
        <React.Fragment>
            <div className="mx-auto w-full px-4 pb-8">
                <div className="space-y-8">
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever.
                            This action cannot be undone.
                        </p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button color="danger" variant="shadow" onPress={onClose} className="min-w-32">
                            Close
                        </Button>
                        <div>
                            {isPending ? (
                                <Button color="primary" isLoading variant="shadow" isDisabled className="min-w-32">
                                    Deleting...
                                </Button>
                            ) : (
                                <Button onClick={onSubmit} color="primary" variant="shadow" type="submit" className="min-w-32">
                                    Delete
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export { Confirm };
