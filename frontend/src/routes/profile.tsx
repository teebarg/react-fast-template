import { createFileRoute } from "@tanstack/react-router";
import userService from "@/services/user.service";

const userQuery = {
    queryKey: ["profile"],
    queryFn: async () => await userService.getProfile(),
};

export const Route = createFileRoute("/profile")({
    loader: async ({ context }: any) => {
        return context.queryClient.ensureQueryData(userQuery);
    },
});
