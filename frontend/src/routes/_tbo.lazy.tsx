import React from "react";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";
import { Banner } from "./_tbo/-components/banner";
import Footer from "./_tbo/-components/footer";
import { Progress } from "@/components/core/progress";

interface Props {}

const Layout: React.FC<Props> = () => {
    return (
        <React.Fragment>
            <Banner />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export const Route = createLazyFileRoute("/_tbo")({
    component: Layout,
    pendingComponent: Progress,
});
