// src/hooks/useAddToHomeScreenPrompt.ts
import { useState, useEffect } from "react";

type BeforeInstallPromptEvent = Event & {
    prompt: () => void;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const useAddToHomeScreenPrompt = () => {
    const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        console.log("in add to screen prompt");
        const beforeInstallPromptHandler = (e: Event) => {
            console.log("🚀 ~ beforeInstallPromptHandler ~ e:", e);
            e.preventDefault();
            setPromptEvent(e as BeforeInstallPromptEvent);
        };

        window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);

        return () => {
            console.log("return in add to screen prompt");
            window.removeEventListener("beforeinstallprompt", beforeInstallPromptHandler);
        };
    }, []);

    const promptToInstall = () => {
        if (promptEvent) {
            promptEvent.prompt();
            promptEvent.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the A2HS prompt");
                } else {
                    console.log("User dismissed the A2HS prompt");
                }
                setPromptEvent(null);
            });
        }
    };

    return [promptEvent, promptToInstall] as const;
};

export default useAddToHomeScreenPrompt;
