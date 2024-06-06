import Settings from "@/pages/Settings";
import AdminHomepage from "@/pages/admin/homepage";

const adminRoutes = [
    {
        index: true,
        Component: AdminHomepage,
    },
    {
        path: "settings",
        Component: Settings,
    },
];

export { adminRoutes };
