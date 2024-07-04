import { createFileRoute, useNavigate } from "@tanstack/react-router";

import React from "react";
import Meta from "@/components/Meta";
import { Button } from "@nextui-org/react";
import userService from "@/services/user.service";
import { User } from "@/models/user";
import { Pagination } from "@/types";
import { useQueryParams } from "@/hooks/use-query-params";
import { Excel } from "@/components/core/excel-uploader";
import TableData from "@/pages/admin/homepage/components/TableData";
import { Progress } from "@/components/core/progress";

interface Props {}
interface userData {
    togs?: Record<string, any>[];
    data: User[];
    pagination: Pagination;
    error?: boolean;
    errorMessage?: string;
}

const Users: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { name } = useQueryParams();
    const { data, ...pagination }: userData = Route.useLoaderData();

    return (
        <React.Fragment>
            <Meta title="Users" />
            <div>
                <div className="max-w-7xl mx-auto p-8">
                    <h1 className="text-2xl font-semibold mb-2">Users:</h1>
                    <div className="py-4">
                        <Excel />
                    </div>
                    <TableData rows={data} pagination={pagination} query={name} />
                    <Button color="secondary" onClick={() => navigate({ to: "/admin" })} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

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
    component: Users,
    pendingComponent: Progress,
});
