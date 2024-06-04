import { CustomContentProps, SnackbarProvider } from "notistack";

import { notifications } from "@/config";

import Notifier from "./Notifier";
import { Ref, forwardRef } from "react";
import NextModal from "@/components/modal";

// here how you can define your own notification component

const CustomNotification = forwardRef(function CustomNotification({ message }: CustomContentProps, ref: Ref<HTMLDivElement>) {
    return <NextModal>{message}</NextModal>;
});

function Notifications() {
    return (
        <SnackbarProvider
            maxSnack={notifications.maxSnack}
            Components={{
                customNotification: CustomNotification,
            }}
        >
            <Notifier />
        </SnackbarProvider>
    );
}

export default Notifications;
