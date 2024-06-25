import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { DeleteIcon } from "react-icons";

interface Props {
    onConfirm?: () => void;
    onClose?: () => void;
}

const Confirm: React.FC<Props> = ({ onConfirm, onClose }) => {
    const [isPending, setIsPending] = useState<boolean>(false);

    const onSubmit = async () => {
        setIsPending(true);
        onConfirm?.();
    };
    return (
        <React.Fragment>
            <div className="mx-auto w-full px-4 pb-8">
                <div className="space-y-10">
                    <div className="flex justify-center items-center">
                        <DeleteIcon className="text-danger h-12 w-12" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">
                            Are you sure you want to delete this user? All of your data will be permanently removed from our servers forever. This
                            action cannot be undone.
                        </p>
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button color="default" variant="shadow" onPress={onClose} className="min-w-32">
                            Close
                        </Button>
                        <div>
                            {isPending ? (
                                <Button color="danger" isLoading variant="shadow" isDisabled className="min-w-32">
                                    Deleting...
                                </Button>
                            ) : (
                                <Button onClick={onSubmit} color="danger" variant="shadow" type="submit" className="min-w-32">
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
