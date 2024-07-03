import NotFound from "@/pages/NotFound";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            {/* <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{" "}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
            </div>
            <hr />
            <p>hi yo jjjj</p> */}
            <Outlet />
            <TanStackRouterDevtools />
        </React.Fragment>
    ),
    notFoundComponent: NotFound,
});
