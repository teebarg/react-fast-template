import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Meta from "@/components/Meta";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Divider } from "@nextui-org/react";

import useNotifications from "@/store/notifications";
import { Password, Email, Input } from "nextui-hook-form";
import { useAuth } from "@/store/auth-provider";
import { GoogleLogin } from "@/components/core/google";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth.service";
import type { AuthContextValue } from "@/store/auth-provider";

type Inputs = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
};

interface Props {}

const SignUp: React.FC<Props> = () => {
    const { login } = useAuth() as AuthContextValue;
    const navigate = useNavigate();

    const [, notify] = useNotifications();

    // Mutations
    const mutation = useMutation({
        mutationFn: authService.signup,
        onSuccess: async (data) => {
            await login(data);
            notify.success("User created successfully");
            navigate({ to: "/" });
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
        mutation.mutate(data);
    };
    return (
        <React.Fragment>
            <Meta title="SignUp" />
            <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm md:min-w-[30rem] bg-default-50 px-8 py-12 rounded-md shadow-xl">
                    <div>
                        <Link to={"/"} className="text-3xl font-semibold">
                            RFT
                        </Link>
                        <h2 className="mt-6 text-xl font-semibold tracking-tight">Sign Up for an account!</h2>
                        <p className="mt-2 text-sm leading-6 text-default-500">
                            Already a member?
                            <Link to="/login" className="ml-2 font-semibold text-primary">
                                Login here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" method="post">
                            <Input register={register} name="firstname" label="FirstName" required isClearable error={errors?.firstname} />
                            <Input register={register} name="lastname" label="LastName" required isClearable error={errors?.lastname} />
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
                                    Sign Up
                                </Button>
                            )}
                            <Divider className="my-4" />
                            <GoogleLogin />
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export const Route = createLazyFileRoute("/_auth/signup")({
    component: SignUp,
});
