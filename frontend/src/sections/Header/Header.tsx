import { title } from "@/config";
import useNotifications from "@/store/notifications";
// import { useTheme } from "@/hooks/use-theme";

import { getRandomJoke } from "./utils";
import { Button } from "@nextui-org/react";

function Header() {
    // const { theme } = useTheme();
    const [, notificationsActions] = useNotifications();

    function showNotification() {
        notificationsActions.push({
            options: {
                // Show fully customized notification
                // Usually, to show a notification, you'll use something like this:
                // notificationsActions.push({ message: ... })
                // `message` accepts string as well as ReactNode
                // If you want to show a fully customized notification, you can define
                // your own `variant`s, see @/sections/Notifications/Notifications.tsx
                variant: "customNotification",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
                type: "success",
                autoHideDuration: 3000,
            },
            message: getRandomJoke(),
        });
    }

    return (
        <div className="flex-grow">
            <div>
                <div>
                    <div className="">
                        <Button onClick={showNotification} color="secondary">
                            {title}
                        </Button>
                    </div>
                    <div className="flex">
                        <div className="flex"></div>
                        <div className="divider" />
                        <div className="divider" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
