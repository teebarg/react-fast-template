import { createFileRoute, useRouter } from "@tanstack/react-router";
import React from "react";
import Meta from "@/components/Meta";
import { Button, Chip, Image } from "@nextui-org/react";
import userService from "@/services/user.service";

interface Props {}

interface userData {
    [key: string]: any;
}

const User: React.FC<Props> = () => {
    const user = Route.useLoaderData() as userData;
    const router = useRouter();

    return (
        <React.Fragment>
            <Meta title="User" />
            <div>
                <div className="max-w-7xl mx-auto bg-content1 p-8 rounded-md shadow-md shadow-fuchsia-200 mt-6">
                    <h1 className="text-2xl font-semibold mb-2">User:</h1>
                    {user && (
                        <div>
                            <Image width={300} alt="NextUI hero Image" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
                            <div className="mt-4 flex gap-2 items-center">
                                Name:{" "}
                                <span className="text-lg">
                                    {" "}
                                    {user.firstname}
                                    {"  "}
                                    {user.lastname}
                                </span>{" "}
                                <Chip color={user.is_superuser ? "warning" : "secondary"} variant="bordered" size="sm">
                                    {user.is_superuser ? "Admin" : "Member"}
                                </Chip>
                            </div>
                            <p>
                                Email: <span className="text-lg mr-2"> {user.email}</span>
                            </p>
                            <p>
                                Role: <span className="text-lg">{user.is_superuser ? "Admin" : "Member"}</span>
                            </p>
                            <p>
                                Date: <span className="text-lg">{user.created_at}</span>
                            </p>
                        </div>
                    )}
                    <Button color="secondary" onClick={() => router.history.back()} className="mt-6">
                        Back
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

const userQuery = (id: string) => ({
    queryKey: ["user", { id }],
    queryFn: async () => {
        return await userService.getUser(id);
    },
});

export const Route = createFileRoute("/_admin/admin/user/$userid")({
    component: User,
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
