import React from "react";
import { LoaderFunction, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";
import { useAuth } from "@/hooks/use-auth";
import { useCookie } from "@/hooks/use-cookie";

interface Props {}

interface loaderData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: Record<string, any>;
    error: boolean;
}

const profileLoader: LoaderFunction = async ({ request }) => {
    const meUri = `${import.meta.env.VITE_API_DOMAIN}/users/me`;
    const { isAuthenticated } = useAuth();
    const { removeCookie } = useCookie();
    if (!isAuthenticated) {
        removeCookie("user");
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    try {
        const res = await fetch(meUri, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        if (!res.ok) {
            if ([401].includes(res.status)) {
                removeCookie("user");
                const params = new URLSearchParams();
                params.set("from", new URL(request.url).pathname);
                return redirect("/login?" + params.toString());
            }
            const errorText = await res.text();
            throw new Error(errorText);
        }
        return { user: await res.json(), error: false };
    } catch (error) {
        return { user: null, error: true };
    }
};

const Profile: React.FC<Props> = () => {
    // Get our logged in user, if they exist, from the root route loader data
    // const { data } = useRouteLoaderData("root") as { user: string | null };
    const fetcher = useFetcher();
    const { user, error } = useLoaderData() as loaderData;

    if (error || !user) {
        return <div>An error occurred</div>;
    }

    const isLoggingOut = fetcher.formData != null;
    return (
        <React.Fragment>
            <div className="px-8 py-2 bg-content1">
                <h2 className="text-base font-semibold leading-7">Personal Information</h2>
                <p className="text-sm leading-6 text-default-600">Use a permanent address where you can receive mail.</p>
                <div className="flex mt-6">
                    <div className="h-32 w-32 rounded-lg relative overflow-hidden">
                        <Image src={"/avatar.png"} alt="profile" />
                    </div>
                    <div className="flex-1 ml-6 space-y-4">
                        <div>
                            <p className="text-sm">Firstname:</p>
                            <p className="text-lg font-semibold mt-0">{user.firstname}</p>
                        </div>
                        <div>
                            <p className="text-sm">Lastname:</p>
                            <p className="text-lg font-semibold mt-0">{user.lastname}</p>
                        </div>
                        <div>
                            <p className="text-sm">Email:</p>
                            <p className="text-lg font-semibold mt-0">{user.email}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <fetcher.Form method="post" action="/logout">
                        <Button type="submit" disabled={isLoggingOut} isLoading={isLoggingOut}>
                            {isLoggingOut ? "Signing out..." : "Sign out"}
                        </Button>
                    </fetcher.Form>
                </div>
            </div>
        </React.Fragment>
    );
};

export { Profile, profileLoader };
