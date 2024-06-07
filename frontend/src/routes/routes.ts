import asyncComponentLoader from "@/utils/loader";

const adminRoutes = [
    {
        index: true,
        Component: asyncComponentLoader(() => import("@/pages/admin/homepage")),
        handle: { scrollMode: "pathname" },
    },
    {
        path: "settings",
        Component: asyncComponentLoader(() => import("@/pages/admin/settings")),
        handle: { scrollMode: "pathname" },
    },
    {
        path: "user/:id",
        Component: asyncComponentLoader(() => import("@/pages/admin/user")),
    },
];

export { adminRoutes };
