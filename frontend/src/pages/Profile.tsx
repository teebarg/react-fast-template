import React from "react";
import { fakeAuthProvider } from "@/hooks/auth";
import { LoaderFunctionArgs, redirect, useFetcher, useRouteLoaderData } from "react-router-dom";
import { Button, Image } from "@nextui-org/react";

export const metadata = {
    title: "Profile | Starter Template",
    description: "Shopit profile starter template built with Tailwind CSS and Next.js.",
};

function profileLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
}

export default function Profile() {
    // Get our logged in user, if they exist, from the root route loader data
    const { user } = useRouteLoaderData("root") as { user: string | null };
    const fetcher = useFetcher();

    if (!user) {
        return <p>You are not logged in.</p>;
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
                            <p className="text-lg font-semibold mt-0">{user}</p>
                        </div>
                        <div>
                            <p className="text-sm">Lastname:</p>
                            <p className="text-lg font-semibold mt-0">{"Doe"}</p>
                        </div>
                        <div>
                            <p className="text-sm">Email:</p>
                            <p className="text-lg font-semibold mt-0">{"email@gmail.com"}</p>
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
}

export { profileLoader };
