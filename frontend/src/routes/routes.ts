import asyncComponentLoader from "@/utils/loader";

const adminRoutes = [
    {
        index: true,
        Component: asyncComponentLoader(() => import("@/pages/admin/homepage")),
    },
    {
        path: "settings",
        Component: asyncComponentLoader(() => import("@/pages/admin/settings")),
    },
];

export { adminRoutes };
