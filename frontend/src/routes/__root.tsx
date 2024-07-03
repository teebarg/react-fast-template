import NotFound from "@/pages/NotFound";
import type { AuthContextValue } from "@/store/auth-provider";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";

interface MyRouterContext {
    auth: AuthContextValue;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <React.Fragment>
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
        </React.Fragment>
    ),
    notFoundComponent: NotFound,
});
// export const Route = createRootRoute({
//     component: () => (
//         <React.Fragment>
//             <Outlet />
//             <TanStackRouterDevtools />
//         </React.Fragment>
//     ),
//     notFoundComponent: NotFound,
// });
