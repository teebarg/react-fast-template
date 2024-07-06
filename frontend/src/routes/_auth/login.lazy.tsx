import React from "react";
import { Link, createLazyFileRoute, useLocation, useNavigate } from "@tanstack/react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Divider } from "@nextui-org/react";

import useNotifications from "@/store/notifications";
import { Password, Email } from "nextui-hook-form";
import { GoogleLogin } from "@/components/core/google";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth.service";
import { useAuth } from "@/store/auth-provider";
import type { AuthContextValue } from "@/store/auth-provider";

type Inputs = {
    email: string;
    password: string;
};

interface Props {}

const Login: React.FC<Props> = () => {
    const location = useLocation();
    const { login } = useAuth() as AuthContextValue;
    const params = new URLSearchParams(location.search);
    const from = params.get("redirect") || "/";
    const navigate = useNavigate({ from });

    const [, notify] = useNotifications();

    // Mutations
    const mutation = useMutation({
        mutationFn: authService.login,
        onSuccess: async (data) => {
            await login(data);
            notify.success("User created successfully");
            navigate({ to: from ?? "/" });
        },
        onError(error) {
            notify.error(JSON.parse(error.message)?.detail);
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data;
        mutation.mutate({ email, password });
    };

    return (
        <React.Fragment>
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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <Email
                            register={register}
                            name="email"
                            label="Email"
                            defaultValue="admin@email.com"
                            required="Email is required for Login"
                            isClearable
                            error={errors?.email}
                        />
                        <Password name="password" label="Password" register={register} error={errors?.password} required="Password is required" />
                        {mutation.isPending ? (
                            <Button color="primary" isLoading variant="shadow" size="lg" fullWidth isDisabled>
                                Logging in...
                            </Button>
                        ) : (
                            <Button color="primary" variant="shadow" size="lg" fullWidth type="submit">
                                Login
                            </Button>
                        )}
                        <Divider className="my-4" />
                        <GoogleLogin />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export const Route = createLazyFileRoute("/_auth/login")({
    component: Login,
});
