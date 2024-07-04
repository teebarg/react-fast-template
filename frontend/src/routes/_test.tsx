import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_test")({
    component: () => <div>Hello /_test!</div>,
});
