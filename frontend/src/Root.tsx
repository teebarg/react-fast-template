import { ComponentType, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

import { Provider } from "./provider";
// import { BrowserRouter } from "react-router-dom";

import "@/styles/globals.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
    root.render(
        <StrictMode>
            <RecoilRoot>
                <HelmetProvider>
                    {/* <BrowserRouter> */}
                    <Provider>
                        <App />
                    </Provider>
                    {/* </BrowserRouter> */}
                </HelmetProvider>
            </RecoilRoot>
        </StrictMode>
    );
}

export default render;
