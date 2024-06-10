import React from "react";
import { Outlet, ScrollRestoration, redirect, useNavigation } from "react-router-dom";
import type { LoaderFunction, Location, useMatches } from "react-router-dom";
import Sidebar from "@/components/core/sidebar";
import AdminNavbar from "@/components/admin-navbar";
import { useAuth } from "@/hooks/use-auth";

const adminLoader: LoaderFunction = ({ request }) => {
    const { isAuthenticated } = useAuth();
    // function profileLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
};

interface Props {}

const AdminLayout: React.FC<Props> = () => {
    const navigation = useNavigation();
    // You can provide a custom implementation of what "key" should be used to
    // cache scroll positions for a given location.  Using the location.key will
    // provide standard browser behavior and only restore on back/forward
    // navigations.  Using location.pathname will provide more aggressive
    // restoration and will also restore on normal link navigations to a
    // previously-accessed path.  Or - go nuts and lump many pages into a
    // single key (i.e., anything /wizard/* uses the same key)!
    const getKey = React.useCallback((location: Location, matches: ReturnType<typeof useMatches>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const match = matches.find((m) => (m.handle as any)?.scrollMode);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((match?.handle as any)?.scrollMode === "pathname") {
            return location.pathname;
        }

        return location.key;
    }, []);
    return (
        <React.Fragment>
            <div
                className="spinner"
                style={{
                    display: navigation.state === "idle" ? "none" : "block",
                }}
            >
                Navigating...
            </div>
            <div className="flex min-h-screen">
                <div className="hidden sm:block min-w-[20rem] h-screen overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1 h-screen overflow-y-auto">
                    <AdminNavbar />
                    <Outlet />
                </div>
            </div>
            <ScrollRestoration getKey={getKey} />
        </React.Fragment>
    );
};

export { adminLoader, AdminLayout };