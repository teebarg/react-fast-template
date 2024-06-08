import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
// import { useMutation } from "@tanstack/react-query";
import { useCookie } from "@/hooks/use-cookie";

const loginAction = async ({ request }: LoaderFunctionArgs) => {
    const { signin } = useAuth;
    const formData = await request.formData();
    const email = formData.get("email") as string | null;
    console.log("🚀 ~ loginAction ~ email:", email);
    const password = formData.get("password") as string | null;
    console.log("🚀 ~ loginAction ~ password:", password);
    const { setCookie, getCookie } = useCookie();

    // Validate our form inputs and return validation errors via useActionData()
    if (!email) {
        return {
            error: "You must provide a username to log in",
        };
    }

    const loginUri = "http://localhost:4012/api/auth/login";
    const meUri = "http://localhost:4012/api/users/me";

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
        //         // return fetch("/todos", newTodo);
        //     },
        // });
        // mutation.mutate()
        const res = await fetch(loginUri, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Login request failed: ${res.status} - ${errorText}`);
        }

        const user = await res.json();
        console.log("🚀 ~ loginAction ~ user:", user);

        if (res.ok && user) {
            console.log("🚀 ~ loginAction ~ user:", user);
            setCookie("user", { name: user.name, email: user.email }, { maxAge: 36000 });
            // setCookie('accessToken', user.access_token);
            // setCookie('refreshToken', user.refresh_token);

            console.log("🚀 ~ loginAction ~ us:", getCookie("user"));

            const res = await fetch(meUri, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            console.log(res);
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Login request failed: ${res.status} - ${errorText}`);
            }

            await signin(user.name);

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
        console.log("🚀 ~ loginAction ~ error:", error);
        // Unused as of now but this is how you would handle invalid
        // username/password combinations - just like validating the inputs
        // above
        return {
            error: "Invalid login attempt",
        };
    }

    const redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");
};

export { loginAction };
