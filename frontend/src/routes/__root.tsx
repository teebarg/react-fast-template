import NotFound from "@/pages/NotFound";
import type { AuthContextValue } from "@/store/auth-provider";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

interface MyRouterContext {
    auth: AuthContextValue;
}

const loadDevtools = () =>
    Promise.all([import("@tanstack/router-devtools"), import("@tanstack/react-query-devtools")]).then(([routerDevtools, reactQueryDevtools]) => {
        return {
            default: () => (
                <React.Fragment>
                    <routerDevtools.TanStackRouterDevtools />
                    <reactQueryDevtools.ReactQueryDevtools />
                </React.Fragment>
            ),
        };
    });

const TanStackDevtools = process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools);

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <React.Fragment>
            <Outlet />
            <Suspense>
                <TanStackDevtools />
            </Suspense>
        </React.Fragment>
    ),
    notFoundComponent: NotFound,
});
