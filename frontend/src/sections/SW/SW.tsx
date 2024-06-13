import { useCallback, useEffect, useRef } from "react";

import type { SnackbarKey } from "notistack";
import { useRegisterSW } from "virtual:pwa-register/react";

import useNotifications from "@/store/notifications";
import { Button } from "@nextui-org/react";

function SW() {
    const [, notificationsActions] = useNotifications();
    const notificationKey = useRef<SnackbarKey | null>(null);
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW();

    const close = useCallback(() => {
        setOfflineReady(false);
        setNeedRefresh(false);

        if (notificationKey.current) {
            notificationsActions.close(notificationKey.current);
        }
    }, [setOfflineReady, setNeedRefresh, notificationsActions]);

    useEffect(() => {
        if (offlineReady) {
            notificationsActions.push({
                options: {
                    autoHideDuration: 4500,
                    content: <div>App is ready to work offline.</div>,
                },
            });
        } else if (needRefresh) {
            notificationKey.current = notificationsActions.push({
                message: "New content is available, click on reload button to update.",
                options: {
                    variant: "warning",
                    persist: true,
                    action: (
                        <>
                            <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
                            <Button onClick={close}>Close</Button>
                        </>
                    ),
                },
            });
        }
    }, [close, needRefresh, offlineReady, notificationsActions, updateServiceWorker]);

    return null;
}

export default SW;
