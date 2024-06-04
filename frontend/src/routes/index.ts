import { GithubIcon } from "@/components/icons";

import asyncComponentLoader from "@/utils/loader";

import { Pages, Routes } from "./types";

const routes: Routes = {
    [Pages.Welcome]: {
        component: asyncComponentLoader(() => import("@/pages/Homepage.tsx")),
        path: "/",
        title: "Welcome",
    },
    [Pages.Page1]: {
        component: asyncComponentLoader(() => import("@/pages/Page1")),
        path: "/page-1",
        title: "Page 1",
        icon: GithubIcon,
    },
    [Pages.Page2]: {
        component: asyncComponentLoader(() => import("@/pages/Page2")),
        path: "/page-2",
        title: "Page 2",
    },
    [Pages.Page3]: {
        component: asyncComponentLoader(() => import("@/pages/Page3")),
        path: "/page-3",
        title: "Page 3",
    },
    [Pages.Page4]: {
        component: asyncComponentLoader(() => import("@/pages/Page4")),
        path: "/page-4",
        title: "Page 4",
    },
    [Pages.NotFound]: {
        component: asyncComponentLoader(() => import("@/pages/NotFound.tsx")),
        path: "*",
    },
};

export default routes;
