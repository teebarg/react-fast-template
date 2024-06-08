import React from "react";
import { CustomContentProps, useSnackbar } from "notistack";
import cn from "classnames";
import { CheckIcon } from "@/components/icons";

type Types = "alert" | "danger" | "info" | "success";

interface AlertProps extends CustomContentProps {
    type: Types;
}
// eslint-disable-next-line react/display-name
const SnackBar = React.forwardRef<HTMLDivElement, AlertProps>(({ id, message, type = "alert" }, ref) => {
    const { closeSnackbar } = useSnackbar();

    const color = () => {
        switch (type) {
            case "alert":
                return "border-yellow-400 bg-yellow-50 text-yellow-700";
            case "danger":
                return "border-red-500 bg-red-50 text-red-700";
            case "info":
                return "border-blue-400 bg-blue-50 text-blue-700";
            case "success":
                return "border-green-400 bg-green-50 text-green-700";
            default:
                return "border-blue-400 bg-blue-50 text-blue-700";
        }
    };

    const handleDismiss = React.useCallback(() => {
        closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
        <div key={id} ref={ref} className={cn("border-l-4 p-4 min-w-[20vw] max-w-md rounded-md", color())}>
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    {type === "alert" && <CheckIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />}
                    {type === "danger" && <CheckIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                    {type === "info" && <CheckIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />}
                    {type === "success" && <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />}
                </div>
                <div className="ml-3">{message}</div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button onClick={handleDismiss} type="button" className="inline-flex rounded-md p-1.5 hover:bg-red-100 focus:outline-none">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

SnackBar.displayName = "SnackBar";

export default SnackBar;
