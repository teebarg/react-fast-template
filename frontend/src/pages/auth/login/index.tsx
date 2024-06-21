import { Form, Link, LoaderFunction, redirect, useActionData, useLocation, useNavigation, useSubmit } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Divider } from "@nextui-org/react";

import useNotifications from "@/store/notifications";
import useWatch from "@/hooks/use-watch";
import { useAuth } from "@/hooks/use-auth";
import { Password, Email } from "nextui-hook-form";

const loginLoader: LoaderFunction = async () => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return redirect("/");
    }
    return null;
};

type Inputs = {
    email: string;
    password: string;
};

interface Props {}

const Login: React.FC<Props> = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const from = params.get("from") || "/";

    const navigation = useNavigation();
    const isLoggingIn = navigation.formData?.get("email") != null;

    const actionData = useActionData() as { error: string } | undefined;
    const [, notificationsActions] = useNotifications();
    const submit = useSubmit();

    useWatch(actionData, (newData) => {
        notificationsActions.push({
            options: {
                type: "danger",
            },
            message: newData?.error,
        });
    });

    const handleGoogleSignIn = async () => {
        // handle google sign in
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data;
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        submit(formData, { method: "post", action: "/login" });
    };

    return (
        <div className="flex min-h-screen">
            <div className="fixed left-4 top-4">
                <ThemeSwitch />
            </div>
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm md:min-w-[30rem] bg-default-50 px-8 py-12 rounded-md shadow-xl">
                    <div>
                        <Link to={"/"} className="text-3xl font-semibold">
                            RFT
                        </Link>
                        <h2 className="mt-6 text-xl font-semibold tracking-tight">Sign in to your account!</h2>
                        <p className="mt-2 text-sm leading-6 text-default-500">
                            Not a member?
                            <Link to="/signup" className="ml-2 font-semibold text-primary">
                                Start a 14 day free trial
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-8" method="post" replace>
                            <input type="hidden" name="redirectTo" value={from} />
                            <div>
                                <Email
                                    register={register}
                                    name="email"
                                    label="Email"
                                    defaultValue="admin@email.com"
                                    required="Email is required for Login"
                                    isClearable
                                    error={errors?.email}
                                />
                            </div>
                            <div>
                                <Password
                                    name="password"
                                    label="Password"
                                    register={register}
                                    error={errors?.password}
                                    required="Password is required"
                                />
                            </div>
                            {isLoggingIn ? (
                                <Button color="primary" isLoading variant="shadow" size="lg" fullWidth isDisabled>
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
                                color="secondary"
                                size="lg"
                                variant="flat"
                                startContent={<img src="/google.svg" alt="Google" className="w-6" />}
                                onPress={handleGoogleSignIn}
                            >
                                Sign in with Google
                            </Button>
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

export { Login, loginLoader };
