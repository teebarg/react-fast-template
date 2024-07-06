import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import React from "react";
import Sidebar from "@/components/core/sidebar";
import AdminNavbar from "@/components/admin-navbar";
import { useAuth } from "@/store/auth-provider";

interface Props {}

const AdminLayout: React.FC<Props> = () => {
    const { isAuthenticated } = useAuth();

    return (
        <React.Fragment>
            <div
                className="spinner"
                style={{
                    display: isAuthenticated ? "none" : "block",
                }}
            ></div>
            <div className="flex min-h-screen">
                <div className="hidden sm:block min-w-[20rem] h-screen overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1 h-screen overflow-y-auto">
                    <AdminNavbar />
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export const Route = createFileRoute("/_admin")({
    component: AdminLayout,
    beforeLoad: ({ context, location }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                },
            });
        }
    },
});
