import { Fragment } from "react";

import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";

import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { fakeAuthProvider } from "@/hooks/auth";
import Homepage from "@/pages/Homepage";
import NotFound from "@/pages/NotFound";
import ErrorPage from "@/pages/ErrorPage";
import Login, { loginAction, loginLoader } from "@/pages/Login";
import Profile, { profileLoader } from "@/pages/Profile";
import Layout from "@/layouts/Layout";
import AdminLayout, { adminLoader } from "@/layouts/AdminLayout";
import { adminRoutes } from "@/routes/routes";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader() {
            // Our root route always provides the user, if logged in
            return { user: fakeAuthProvider.username };
        },
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "login",
                action: loginAction,
                loader: loginLoader,
                Component: Login,
            },
            {
                path: "protected",
                loader: profileLoader,
                Component: Profile,
            },
            {
                path: "admin",
                loader: adminLoader,
                Component: AdminLayout,
                children: adminRoutes,
            },
        ],
    },
    {
        path: "/logout",
        async action() {
            // We signout in a "resource route" that we can hit from a fetcher.Form
            await fakeAuthProvider.signout();
            return redirect("/");
        },
    },
    { path: "*", element: <NotFound /> },
]);

function App() {
    return (
        <Fragment>
            <Notifications />
            <HotKeys />
            <SW />
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </Fragment>
    );
}

// export default withErrorHandler(App, AppErrorBoundaryFallback);
export default App;
