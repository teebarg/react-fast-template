import { createFileRoute } from "@tanstack/react-router";
import userService from "@/services/user.service";

const userQuery = (id: string) => ({
    queryKey: ["user", { id }],
    queryFn: async () => {
        return await userService.getUser(id);
    },
});

export const Route = createFileRoute("/_admin/admin/user/$userid")({
    params: {
        parse: (params) => ({
            userid: Number(params.userid),
        }),
        stringify: ({ userid }) => ({ userid: `${userid}` }),
    },
    loader: async ({ context, params: { userid } }: any) => {
        const userQueryOptions = userQuery(userid);
        return context.queryClient.ensureQueryData(userQueryOptions);
    },
});
