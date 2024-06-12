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

const tboRoutes = [
    {
        index: true,
        Component: asyncComponentLoader(() => import("@/pages/tbo/landing")),
    },
    {
        path: "collections",
        async lazy() {
            const { Collections } = await import("@/pages/tbo/collections");
            return {
                Component: Collections,
            };
        },
        handle: { scrollMode: "pathname" },
    },
    {
        path: "product",
        async lazy() {
            const { Product } = await import("@/pages/tbo/product");
            return {
                Component: Product,
            };
        },
        handle: { scrollMode: "pathname" },
    },
];

export { adminRoutes, tboRoutes };
