import React from "react";
import { Outlet } from "react-router-dom";
import { fakeAuthProvider } from "@/hooks/auth";
import { redirect, LoaderFunction } from "react-router-dom";
import Sidebar from "@/components/core/sidebar";
import AdminNavbar from "@/components/admin-navbar";

const adminLoader: LoaderFunction = ({ request }) => {
    // function profileLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
};

interface Props {}

const AdminLayout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <div className="flex min-h-screen">
                <div className="hidden sm:block">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <AdminNavbar />
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export { adminLoader };
export default AdminLayout;
