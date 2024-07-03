/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AdminImport } from "./routes/_admin";
import { Route as AdminAdminUsersImport } from "./routes/_admin/admin.users";

// Create Virtual Routes

const SettingsLazyImport = createFileRoute("/settings")();
const AboutLazyImport = createFileRoute("/about")();
const IndexLazyImport = createFileRoute("/")();
const AuthSignupLazyImport = createFileRoute("/_auth/signup")();
const AuthLoginLazyImport = createFileRoute("/_auth/login")();
const AdminAdminIndexLazyImport = createFileRoute("/_admin/admin/")();
const AdminAdminSettingsLazyImport = createFileRoute("/_admin/admin/settings")();

// Create/Update Routes

const SettingsLazyRoute = SettingsLazyImport.update({
    path: "/settings",
    getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/settings.lazy").then((d) => d.Route));

const AboutLazyRoute = AboutLazyImport.update({
    path: "/about",
    getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then((d) => d.Route));

const AuthRoute = AuthImport.update({
    id: "/_auth",
    getParentRoute: () => rootRoute,
} as any);

const AdminRoute = AdminImport.update({
    id: "/_admin",
    getParentRoute: () => rootRoute,
} as any);

const IndexLazyRoute = IndexLazyImport.update({
    path: "/",
    getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

const AuthSignupLazyRoute = AuthSignupLazyImport.update({
    path: "/signup",
    getParentRoute: () => AuthRoute,
} as any).lazy(() => import("./routes/_auth/signup.lazy").then((d) => d.Route));

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
    path: "/login",
    getParentRoute: () => AuthRoute,
} as any).lazy(() => import("./routes/_auth/login.lazy").then((d) => d.Route));

const AdminAdminIndexLazyRoute = AdminAdminIndexLazyImport.update({
    path: "/admin/",
    getParentRoute: () => AdminRoute,
} as any).lazy(() => import("./routes/_admin/admin.index.lazy").then((d) => d.Route));

const AdminAdminSettingsLazyRoute = AdminAdminSettingsLazyImport.update({
    path: "/admin/settings",
    getParentRoute: () => AdminRoute,
} as any).lazy(() => import("./routes/_admin/admin.settings.lazy").then((d) => d.Route));

const AdminAdminUsersRoute = AdminAdminUsersImport.update({
    path: "/admin/users",
    getParentRoute: () => AdminRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
    interface FileRoutesByPath {
        "/": {
            id: "/";
            path: "/";
            fullPath: "/";
            preLoaderRoute: typeof IndexLazyImport;
            parentRoute: typeof rootRoute;
        };
        "/_admin": {
            id: "/_admin";
            path: "";
            fullPath: "";
            preLoaderRoute: typeof AdminImport;
            parentRoute: typeof rootRoute;
        };
        "/_auth": {
            id: "/_auth";
            path: "";
            fullPath: "";
            preLoaderRoute: typeof AuthImport;
            parentRoute: typeof rootRoute;
        };
        "/about": {
            id: "/about";
            path: "/about";
            fullPath: "/about";
            preLoaderRoute: typeof AboutLazyImport;
            parentRoute: typeof rootRoute;
        };
        "/settings": {
            id: "/settings";
            path: "/settings";
            fullPath: "/settings";
            preLoaderRoute: typeof SettingsLazyImport;
            parentRoute: typeof rootRoute;
        };
        "/_auth/login": {
            id: "/_auth/login";
            path: "/login";
            fullPath: "/login";
            preLoaderRoute: typeof AuthLoginLazyImport;
            parentRoute: typeof AuthImport;
        };
        "/_auth/signup": {
            id: "/_auth/signup";
            path: "/signup";
            fullPath: "/signup";
            preLoaderRoute: typeof AuthSignupLazyImport;
            parentRoute: typeof AuthImport;
        };
        "/_admin/admin/users": {
            id: "/_admin/admin/users";
            path: "/admin/users";
            fullPath: "/admin/users";
            preLoaderRoute: typeof AdminAdminUsersImport;
            parentRoute: typeof AdminImport;
        };
        "/_admin/admin/settings": {
            id: "/_admin/admin/settings";
            path: "/admin/settings";
            fullPath: "/admin/settings";
            preLoaderRoute: typeof AdminAdminSettingsLazyImport;
            parentRoute: typeof AdminImport;
        };
        "/_admin/admin/": {
            id: "/_admin/admin/";
            path: "/admin";
            fullPath: "/admin";
            preLoaderRoute: typeof AdminAdminIndexLazyImport;
            parentRoute: typeof AdminImport;
        };
    }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
    IndexLazyRoute,
    AdminRoute: AdminRoute.addChildren({
        AdminAdminUsersRoute,
        AdminAdminSettingsLazyRoute,
        AdminAdminIndexLazyRoute,
    }),
    AuthRoute: AuthRoute.addChildren({ AuthLoginLazyRoute, AuthSignupLazyRoute }),
    AboutLazyRoute,
    SettingsLazyRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_admin",
        "/_auth",
        "/about",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_admin": {
      "filePath": "_admin.tsx",
      "children": [
        "/_admin/admin/users",
        "/_admin/admin/settings",
        "/_admin/admin/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/settings": {
      "filePath": "settings.lazy.tsx"
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.lazy.tsx",
      "parent": "/_auth"
    },
    "/_admin/admin/users": {
      "filePath": "_admin/admin.users.tsx",
      "parent": "/_admin"
    },
    "/_admin/admin/settings": {
      "filePath": "_admin/admin.settings.lazy.tsx",
      "parent": "/_admin"
    },
    "/_admin/admin/": {
      "filePath": "_admin/admin.index.lazy.tsx",
      "parent": "/_admin"
    }
  }
}
ROUTE_MANIFEST_END */
