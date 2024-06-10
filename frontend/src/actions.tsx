/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect, LoaderFunctionArgs } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
import { useCookie } from "@/hooks/use-cookie";

const loginAction =
    ({ login }: { login: any }) =>
    async ({ request }: LoaderFunctionArgs) => {
        const formData = await request.formData();
        const email = formData.get("email") as string | null;
        const password = formData.get("password") as string | null;
        const { setCookie } = useCookie();

        // Validate our form inputs and return validation errors via useActionData()
        if (!email) {
            return {
                error: "You must provide a username to log in",
            };
        }

        // Sign in and redirect to the proper destination if successful.
        try {
            // await signin(username);
            // const mutation = useMutation({
            //     mutationFn: () => {
            //         return fetch(loginUri, {
            //             method: "POST",
            //             body: JSON.stringify({ email, password }),
            //             headers: { "Content-Type": "application/json" },
            //         });
            //     },
            // });
            // mutation.mutate()
            const res = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText);
            }

            const user = await res.json();

            if (res.ok && user) {
                setCookie("user", { name: user.name, email: user.email }, { maxAge: 3600 });
                setCookie("accessTokenExpires", user.expires, { maxAge: 3600 });
                login();

                // await signin(user.name);

                // return {
                //     id: user.id,
                //     name: user.name,
                //     email: user.email,
                //     accessToken: user.access_token,
                //     refreshToken: user.refresh_token,
                //     accessTokenExpires: user.expires,
                // };
            }
        } catch (error) {
            // Unused as of now but this is how you would handle invalid
            // username/password combinations - just like validating the inputs
            // above
            return {
                error: "Invalid login attempt " + error,
            };
        }

        const redirectTo = formData.get("redirectTo") as string | null;
        return redirect(redirectTo || "/");
    };

export { loginAction };