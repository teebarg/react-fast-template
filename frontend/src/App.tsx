import { Fragment } from "react";

import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";

import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ErrorPage from "@/pages/ErrorPage";
import { adminRoutes } from "@/routes/routes";
import asyncComponentLoader from "@/utils/loader";
import LoadingPage from "@/components/loading";
import { useAuth } from "@/store/auth-provider";
import type { AuthContextValue } from "@/store/auth-provider";

function App() {
    const { logout, login } = useAuth() as AuthContextValue;
    const router = createBrowserRouter([
        {
            id: "root",
            path: "/",
            loader() {
                // Our root route always provides the user, if logged in
                return { user: "John Doe" };
            },
            Component: asyncComponentLoader(() => import("@/pages/layout")),
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    Component: asyncComponentLoader(() => import("@/pages/Homepage")),
                },
                {
                    path: "admin",
                    async lazy() {
                        const { adminLoader, AdminLayout } = await import("@/pages/admin/layout");
                        return {
                            loader: adminLoader,
                            Component: AdminLayout,
                        };
                    },
                    children: adminRoutes,
                    handle: { scrollMode: "pathname" },
                },
                {
                    path: "sandbox",
                    Component: asyncComponentLoader(() => import("@/pages/generic/sandbox")),
                },
                {
                    path: "tbo",
                    Component: asyncComponentLoader(() => import("@/pages/tbo/landing")),
                },
                {
                    path: "profile",
                    async lazy() {
                        const { Profile, profileLoader } = await import("@/pages/generic/profile");
                        return {
                            loader: profileLoader,
                            Component: Profile,
                        };
                    },
                },
                {
                    path: "login",
                    async lazy() {
                        const { loginLoader, Login } = await import("@/pages/auth/login");
                        const { loginAction } = await import("@/actions");
                        return {
                            action: loginAction({ login }),
                            loader: loginLoader,
                            Component: Login,
                        };
                    },
                },
            ],
        },
        {
            path: "/logout",
            async action() {
                // We signout in a "resource route" that we can hit from a fetcher.Form
                logout();
                return redirect("/");
            },
        },
        { path: "*", element: <NotFound /> },
    ]);

    if (import.meta.hot) {
        import.meta.hot.dispose(() => router.dispose());
    }
    return (
        <Fragment>
            <Notifications />
            <HotKeys />
            <SW />
            <RouterProvider router={router} fallbackElement={<LoadingPage />} />
        </Fragment>
    );
}

export default App;
