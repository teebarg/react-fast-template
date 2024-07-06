import { Fragment, Suspense, lazy } from "react";

import { useAuth } from "@/store/auth-provider";
import useAddToHomeScreenPrompt from "@/hooks/useAddToHomeScreenPrompt";
import { PwaBanner } from "@/components/pwa-banner";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import LoadingPage from "./components/loading";
import { useQueryClient } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";

// Lazy load the sections
const HotKeys = lazy(() => import("@/sections/HotKeys"));
const Notifications = lazy(() => import("@/sections/Notifications"));
const SW = lazy(() => import("@/sections/SW"));

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {
        auth: undefined!,
        queryClient: undefined,
    },
    defaultPendingComponent: () => (
        <div className={`p-2 text-2xl`}>
            <LoadingPage />
        </div>
    ),
    defaultErrorComponent: ErrorPage,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function App() {
    const [promptEvent, promptToInstall] = useAddToHomeScreenPrompt();
    const auth = useAuth();
    const queryClient = useQueryClient();

    return (
        <Fragment>
            {promptEvent && <PwaBanner onClick={promptToInstall} />}
            <Suspense fallback={<LoadingPage />}>
                <Notifications />
                <HotKeys />
                <SW />
            </Suspense>
            <RouterProvider router={router} context={{ auth, queryClient }} />
        </Fragment>
    );
}

export default App;
