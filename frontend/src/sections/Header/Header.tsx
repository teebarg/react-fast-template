import { repository, title } from "@/config";
import useHotKeysDialog from "@/store/hotkeys";
import useNotifications from "@/store/notifications";
import { useTheme } from "@/hooks/use-theme";
import { ThemeSwitch } from "@/components/theme-switch";

import { getRandomJoke } from "./utils";
import { Button } from "@nextui-org/react";

function Header() {
    const { theme } = useTheme();
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
            },
            message: getRandomJoke(),
        });
    }

    return (
        <div className="flex-grow" data-pw={`theme-${theme}`}>
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
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
