import { Fragment } from "react";

import { withErrorHandler } from "@/error-handling";
import AppErrorBoundaryFallback from "@/error-handling/fallbacks/App";
import Pages from "@/routes/Pages";
import HotKeys from "@/sections/HotKeys";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import type { LoaderFunctionArgs } from "react-router-dom";
import {
    Form,
    Link,
    Outlet,
    RouterProvider,
    createBrowserRouter,
    redirect,
    useActionData,
    useFetcher,
    useLocation,
    useNavigation,
    useRouteLoaderData,
} from "react-router-dom";
import { fakeAuthProvider } from "@/hooks/auth";
import Layout from "./layouts/Layout";
import PublicPage from "./layouts/PublicPage";
import { LoginPage, loginAction, loginLoader } from "./layouts/LoginPage";
import { ProtectedPage, protectedLoader } from "./layouts/ProtectedPage";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader() {
            // Our root route always provides the user, if logged in
            return { user: fakeAuthProvider.username };
        },
        Component: Layout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "login",
                action: loginAction,
                loader: loginLoader,
                Component: LoginPage,
            },
            {
                path: "protected",
                loader: protectedLoader,
                Component: ProtectedPage,
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
            {/* <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    <Pages />
                </main>
                <Footer />
            </div> */}
        </Fragment>
    );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
