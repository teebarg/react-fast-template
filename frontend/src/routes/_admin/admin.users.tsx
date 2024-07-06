import { createFileRoute, redirect } from "@tanstack/react-router";

import userService from "@/services/user.service";

const getUsersQueryOptions = ({ name, page }: any) => ({
    queryKey: ["users", { name, page }],
    queryFn: () => userService.getUsers({ name, page }),
});

export const Route = createFileRoute("/_admin/admin/users")({
    loader: async ({ context, deps }: any) => {
        try {
            const postsQueryOptions = getUsersQueryOptions(deps);
            const data = await context.queryClient.ensureQueryData(postsQueryOptions);
            return data;
        } catch (error: any) {
            if ([401].includes(error.status)) {
                throw redirect({
                    to: "/login",
                    search: {
                        redirect: "/admin/users",
                    },
                });
            }
            if ([400, 403].includes(error.status)) {
                throw redirect({ to: "/admin" });
            }
            throw Error(error.message);
        }
    },
    loaderDeps: ({ search }: any) => {
        return {
            name: search.name,
            page: search.page,
        };
    },
});
