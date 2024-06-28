import { useCallback, useEffect, useRef } from "react";

import type { SnackbarKey } from "notistack";
import { useRegisterSW } from "virtual:pwa-register/react";

import useNotifications from "@/store/notifications";
import { Button } from "@nextui-org/react";

/**
 * This function will register a periodic sync check every hour, you can modify the interval as needed.
 */
function registerPeriodicSync(period: number, swUrl: string, r: ServiceWorkerRegistration) {
    if (period <= 0) return;

    setInterval(async () => {
        if ("onLine" in navigator && !navigator.onLine) return;

        const resp = await fetch(swUrl, {
            cache: "no-store",
            headers: {
                cache: "no-store",
                "cache-control": "no-cache",
            },
        });

        if (resp?.status === 200) await r.update();
    }, period);
}

function SW() {
    // check for updates every hour
    const period = 60 * 60 * 1000;
    const [, notificationsActions] = useNotifications();
    const notificationKey = useRef<SnackbarKey | null>(null);
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl, r) {
            if (period <= 0) return;
            if (r?.active?.state === "activated") {
                registerPeriodicSync(period, swUrl, r);
            } else if (r?.installing) {
                r.installing.addEventListener("statechange", (e) => {
                    const sw = e.target as ServiceWorker;
                    if (sw.state === "activated") registerPeriodicSync(period, swUrl, r);
                });
            }
        },
    });

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
