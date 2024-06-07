import { redirect, LoaderFunction } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const adminLoader: LoaderFunction = ({ request }) => {
    const { isAuthenticated } = useAuth;
    // function profileLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
};

const loginLoader: LoaderFunction = async () => {
    const { isAuthenticated } = useAuth;
    if (isAuthenticated) {
        return redirect("/");
    }
    return null;
};

const profileLoader: LoaderFunction = ({ request }) => {
    const { isAuthenticated } = useAuth;
    // function profileLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/login?" + params.toString());
    }
    return null;
};

export { adminLoader, loginLoader, profileLoader };
