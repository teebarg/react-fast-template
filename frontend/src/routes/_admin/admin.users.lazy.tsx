import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

import React, { Suspense, lazy } from "react";
// import Meta from "@/components/Meta";
import { Button } from "@nextui-org/react";
import { User } from "@/models/user";
import { Pagination } from "@/types";
import { useQueryParams } from "@/hooks/use-query-params";
import { Excel } from "@/components/core/excel-uploader";
import { Progress } from "@/components/core/progress";
// import TableData from "./-components/table-data";

const Meta = lazy(() => import("@/components/Meta"));
const TableData = lazy(() => import("./-components/table-data"));

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
    const { data, ...pagination }: userData = Route.useLoaderData() ?? {};

    return (
        <React.Fragment>
            <Meta title="Users" />
            <div>
                <div className="max-w-7xl mx-auto p-8">
                    <h1 className="text-2xl font-semibold mb-2">Users:</h1>
                    <div className="py-4">
                        <Excel />
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TableData rows={data} pagination={pagination} query={name} />
                    </Suspense>
                    <Button color="secondary" onClick={() => navigate({ to: "/admin" })} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export const Route = createLazyFileRoute("/_admin/admin/users")({
    component: Users,
    pendingComponent: Progress,
});
