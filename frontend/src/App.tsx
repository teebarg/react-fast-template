import { Fragment } from "react";

import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";

import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ErrorPage from "@/pages/ErrorPage";
import { adminRoutes } from "@/routes/routes";
import asyncComponentLoader from "@/utils/loader";
import { useAuth } from "@/hooks/use-auth";
import { adminLoader, loginLoader, profileLoader } from "@/gate";
import { loginAction } from "@/actions";
import LoadingPage from "@/components/loading";

const { username, signout } = useAuth;

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader() {
            // Our root route always provides the user, if logged in
            return { user: username };
        },
        Component: asyncComponentLoader(() => import("@/pages/layout")),
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: asyncComponentLoader(() => import("@/pages/Homepage")),
            },
            {
                path: "login",
                action: loginAction,
                loader: loginLoader,
                Component: asyncComponentLoader(() => import("@/pages/auth/login")),
            },
            {
                path: "profile",
                loader: profileLoader,
                Component: asyncComponentLoader(() => import("@/pages/generic/profile")),
            },
            {
                path: "admin",
                loader: adminLoader,
                Component: asyncComponentLoader(() => import("@/pages/admin/layout")),
                children: adminRoutes,
                handle: { scrollMode: "pathname" },
            },
            // {
            //     path: "admin",
            //     async lazy() {
            //         let AdminLayout = await import("@/pages/admin/layout");
            //         return {
            //             loader: adminLoader,
            //             Component: AdminLayout.default, // Change the property to 'default'
            //             children: adminRoutes,
            //         };
            //     },
            // },
            {
                path: "sandbox",
                Component: asyncComponentLoader(() => import("@/pages/generic/sandbox")),
            },
            {
                path: "tbo",
                Component: asyncComponentLoader(() => import("@/pages/tbo/landing")),
            },
        ],
    },
    {
        path: "/logout",
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await signout();
            return redirect("/");
        },
    },
    { path: "*", element: <NotFound /> },
]);

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

function App() {
    return (
        <Fragment>
            <Notifications />
            <HotKeys />
            <SW />
            <RouterProvider router={router} fallbackElement={<LoadingPage />} />
        </Fragment>
    );
}

// export default withErrorHandler(App, AppErrorBoundaryFallback);
export default App;
