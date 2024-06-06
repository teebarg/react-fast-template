import React from "react";
import { Outlet } from "react-router-dom";
import { fakeAuthProvider } from "@/hooks/auth";
import { redirect, LoaderFunction } from "react-router-dom";

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
            <Outlet />
        </React.Fragment>
    );
};

export { adminLoader };
export default AdminLayout;
