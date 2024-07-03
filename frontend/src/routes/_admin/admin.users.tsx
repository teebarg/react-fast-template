import { createFileRoute, useNavigate } from "@tanstack/react-router";

import React from "react";
import Meta from "@/components/Meta";
// import { LoaderFunction, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import userService from "@/services/user.service";
// import { useCookie } from "@/hooks/use-cookie";
import { User } from "@/models/user";
import { Pagination } from "@/types";
import { useQueryParams } from "@/hooks/use-query-params";
import { Excel } from "@/components/core/excel-uploader";
import { QueryClient } from "@tanstack/react-query";
import TableData from "@/pages/admin/homepage/components/TableData";
import { Progess } from "@/components/core/progess";

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

// Create a client
const queryClient = new QueryClient();
// const queryClient = useQueryClient()

const getUsersQueryOptions = ({ name, page }: any) => ({
    queryKey: ["users", { name, page }],
    queryFn: () => userService.getUsers({ name, page }),
});

// const postsQueryOptions = queryOptions({
//     queryKey: ["users"],
//     queryFn: () => userService.getUsers({ name: "", page: "1" }),
// });

export const Route = createFileRoute("/_admin/admin/users")({
    loader: ({ deps }) => {
        const postsQueryOptions = getUsersQueryOptions(deps);
        return queryClient.ensureQueryData(postsQueryOptions);
    },
    loaderDeps: ({ search }: any) => {
        return {
            name: search.name,
            page: search.page,
        };
    },
    component: Users,
    pendingComponent: Progess,
});
