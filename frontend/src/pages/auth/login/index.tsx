import { Form, Link, LoaderFunction, redirect, useActionData, useLocation, useNavigate, useNavigation } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";

import { useForm } from "react-hook-form";
import { PasswordField } from "@/components/core/fields";
import { Button, Divider, Input } from "@nextui-org/react";

import useNotifications from "@/store/notifications";
import useWatch from "@/hooks/use-watch";
import { useAuth } from "@/hooks/use-auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useCookie } from "@/hooks/use-cookie";
import { AuthContextValue } from "@/store/auth-provider";
import { useAuth as useAuthCtx } from "@/store/auth-provider";
import authService from "@/services/auth.service";

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
    const navigate = useNavigate();

    const actionData = useActionData() as { error: string } | undefined;
    const [, notificationsActions] = useNotifications();
    const { setCookie } = useCookie();
    const { login } = useAuthCtx() as AuthContextValue;

    useWatch(actionData, (newData) => {
        notificationsActions.push({
            options: {
                type: "danger",
            },
            message: newData?.error,
        });
    });

    const handleGoogleSignIn = useGoogleLogin({
        onSuccess: async (codeResponse) => {
            const userInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                method: "GET",
                headers: { Authorization: `Bearer ${codeResponse.access_token}` },
            }).then((res) => res.json());

            try {
                const user = await authService.socialLogin({
                    firstname: userInfo.given_name,
                    lastname: userInfo.family_name,
                    email: userInfo.email,
                });
                if (user) {
                    setCookie("user", { name: userInfo.given_name, email: userInfo.email }, { maxAge: 3600 });
                    setCookie("accessTokenExpires", user.expires, { maxAge: 3600 });
                    login();
                    navigate(from ?? "/");
                }
            } catch (error) {
                notificationsActions.push({
                    options: {
                        type: "danger",
                    },
                    message: `Login request failed: ${error}`,
                });
            }
        },
        onError: (errorResponse) => {
            notificationsActions.push({
                options: {
                    type: "danger",
                },
                message: `Google Login request failed: ${errorResponse}`,
            });
        },
    });

    const {
        register,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <div className="flex min-h-screen">
            <div className="fixed left-4 top-4">
                <ThemeSwitch />
            </div>
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm md:min-w-[30rem] bg-content1 px-8 py-12 rounded-md">
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
                        <Form className="space-y-8" method="post" replace>
                            <input type="hidden" name="redirectTo" value={from} />
                            <div>
                                <Input name="email" isRequired type="email" label="Email" defaultValue="admin@email.com" />
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
                                fullWidth
                                size="lg"
                                variant="flat"
                                startContent={<img src="/google.svg" alt="Google" className="w-6" />}
                                onPress={() => handleGoogleSignIn()}
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
