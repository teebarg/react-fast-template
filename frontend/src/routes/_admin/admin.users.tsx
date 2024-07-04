import { createFileRoute } from "@tanstack/react-router";

import userService from "@/services/user.service";

const getUsersQueryOptions = ({ name, page }: any) => ({
    queryKey: ["users", { name, page }],
    queryFn: () => userService.getUsers({ name, page }),
});

export const Route = createFileRoute("/_admin/admin/users")({
    loader: async ({ context, deps }: any) => {
        const postsQueryOptions = getUsersQueryOptions(deps);
        return context.queryClient.ensureQueryData(postsQueryOptions);
    },
    loaderDeps: ({ search }: any) => {
        return {
            name: search.name,
            page: search.page,
        };
    },
});
