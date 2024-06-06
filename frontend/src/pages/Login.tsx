import { fakeAuthProvider } from "@/hooks/auth";
import type { LoaderFunctionArgs } from "react-router-dom";
import { Form, redirect, useActionData, useLocation, useNavigation } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";

import { useForm } from "react-hook-form";
import Alert from "@/components/core/alert";
import { PasswordField } from "@/components/core/fields";
import { Button, Divider, Input, Link } from "@nextui-org/react";

async function loginAction({ request }: LoaderFunctionArgs) {
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
        await fakeAuthProvider.signin(username);
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
}

async function loginLoader() {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect("/");
    }
    return null;
}

type Inputs = {
    // email: string;
    password: string;
};

interface Props {}

const Login: React.FC<Props> = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const from = params.get("from") || "/";

    const navigation = useNavigation();
    const isLoggingIn = navigation.formData?.get("username") != null;

    const actionData = useActionData() as { error: string } | undefined;

    const handleGoogleSignIn = async () => {
        // handle google sign in
    };

    const {
        register,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <div className="flex">
            <div className="fixed left-4 top-4">
                <ThemeSwitch />
            </div>
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm md:min-w-[30rem] bg-content1 px-8 py-12 rounded-md">
                    <div>
                        <h2 className="text-3xl font-semibold">ShpIT</h2>
                        <h2 className="mt-6 text-xl font-semibold tracking-tight">Sign in to your account!</h2>
                        <p className="mt-2 text-sm leading-6 text-default-500">
                            Not a member?
                            <Link href="/signup" className="ml-2 font-semibold text-primary">
                                Start a 14 day free trial
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <Form className="space-y-8" method="post" replace>
                            <input type="hidden" name="redirectTo" value={from} />
                            <div>
                                <Input name="username" isRequired type="text" label="Email" defaultValue="junior" className="" />
                            </div>
                            <div>
                                <PasswordField
                                    name="password"
                                    label="Password"
                                    register={register}
                                    error={errors?.password}
                                    rules={{ required: true }}
                                />
                            </div>
                            {isLoggingIn ? (
                                <Button color="primary" isLoading size="lg" fullWidth type="submit">
                                    Logging in...
                                </Button>
                            ) : (
                                <Button color="primary" variant="shadow" size="lg" fullWidth type="submit">
                                    Login
                                </Button>
                            )}
                            <Divider className="my-4" />
                            <Button
                                className="w-full"
                                color="primary"
                                size="lg"
                                variant="flat"
                                startContent={<img src="/google.svg" alt="Google" className="w-6" />}
                                onPress={handleGoogleSignIn}
                            >
                                Sign in with Google
                            </Button>
                            {actionData && actionData.error && (
                                <Alert type="alert" delay={500000}>
                                    <p>{actionData.error}</p>
                                </Alert>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block blue-radial">
                <img className="absolute inset-0 h-full w-full" src="/au-girl.svg" alt="background image" />
            </div>
        </div>
    );
};

export { loginAction, loginLoader };
export default Login;
