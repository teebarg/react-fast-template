import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

import { Provider } from "./provider";

import "@/styles/globals.css";
import { AuthProvider } from "@/store/auth-provider";
// import useAddToHomeScreenPrompt from "@/hooks/useAddToHomeScreenPrompt";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
    root.render(
        <StrictMode>
            <RecoilRoot>
                <HelmetProvider>
                    <Provider>
                        <AuthProvider>
                            <App />
                        </AuthProvider>
                    </Provider>
                </HelmetProvider>
            </RecoilRoot>
        </StrictMode>
    );
}

export default render;
