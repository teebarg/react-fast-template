import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_admin/admin/settings")({
    component: () => <div>Hello /admin/settings!</div>,
});
