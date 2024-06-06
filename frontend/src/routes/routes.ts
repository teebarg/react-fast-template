import AdminHomepage from "@/pages/AdminHomepage";
import Settings from "@/pages/Settings";

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
