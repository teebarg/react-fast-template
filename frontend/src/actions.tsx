import { redirect, LoaderFunctionArgs } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const loginAction = async ({ request }: LoaderFunctionArgs) => {
    const { signin } = useAuth;
    const formData = await request.formData();
    const username = formData.get("username") as string | null;

    // Validate our form inputs and return validation errors via useActionData()
    if (!username) {
        return {
            error: "You must provide a username to log in",
        };
    }

    // Sign in and redirect to the proper destination if successful.
    try {
        await signin(username);
    } catch (error) {
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
