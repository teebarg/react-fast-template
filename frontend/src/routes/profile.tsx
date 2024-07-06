import { createFileRoute, redirect } from "@tanstack/react-router";
import userService from "@/services/user.service";

const userQuery = {
    queryKey: ["profile"],
    queryFn: async () => await userService.getProfile(),
};

export const Route = createFileRoute("/profile")({
    loader: async ({ context }: any) => {
        try {
            const data = await context.queryClient.ensureQueryData(userQuery);
            return data;
        } catch (error: any) {
            if ([401].includes(error.status)) {
                throw redirect({
                    to: "/login",
                    search: {
                        redirect: "/profile",
                    },
                });
            }
            if ([400, 403].includes(error.status)) {
                throw redirect({ to: "/" });
            }
            throw Error(error.message);
        }
    },
});
