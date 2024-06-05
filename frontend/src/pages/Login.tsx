import { ThemeSwitch } from "@/components/theme-switch";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@/components/core/alert";
import { TextField, PasswordField } from "@/components/core/fields";
import { Button, Divider, Link } from "@nextui-org/react";

type Inputs = {
    email: string;
    password: string;
};

interface Props {}

const Login: React.FC<Props> = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGoogleSignIn = async () => {
        // handle google sign in
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (loading) {
            return;
        }
        setError(false);
        setErrorMessage("");
        setLoading(true);
        const { email, password } = data;
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (response?.ok) {
                // eslint-disable-next-line no-undef
                window.location.href = "/";
                setLoading(false);
                return;
            }

            setError(true);
            if (response?.status === 401) {
                setErrorMessage("Invalid credentials");
            }
            setLoading(false);
        } catch (error) {
            setErrorMessage("An error occurred, please contact the administrator");
            setLoading(false);
        }
    };
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
                        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <TextField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    placeholder="Ex. email@email.com"
                                    register={register}
                                    error={errors?.email}
                                    rules={{ required: true, email: true }}
                                    isClearable
                                />
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
                            {loading ? (
                                <Button color="primary" isLoading size="lg" fullWidth type="submit">
                                    Loading
                                </Button>
                            ) : (
                                <Button color="primary" variant="shadow" size="lg" fullWidth type="submit">
                                    Submit
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
                            {error && (
                                <Alert type="alert" delay={500000} onClose={() => setError(false)}>
                                    <p>{errorMessage}</p>
                                </Alert>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block blue-radial">
                <img className="absolute inset-0 h-full w-full" src="/au-girl.svg" alt="background image" />
            </div>
        </div>
    );
};

export default Login;
