import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";

interface Props {}

const AdminLayout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <div className="flex min-h-screen">
                <div className="fixed left-4 top-4">
                    <ThemeSwitch />
                </div>
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <Outlet />
                </div>
                <div className="relative hidden w-0 flex-1 lg:block blue-radial">
                    <img className="absolute inset-0 h-full w-full" src="/images/au-girl.svg" alt="background image" />
                </div>
            </div>
        </React.Fragment>
    );
};

export const Route = createFileRoute("/_auth")({
    component: AdminLayout,
    beforeLoad: ({ context }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({
                to: "/",
            });
        }
    },
});
