"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@/components/core/alert";
import { TextField, TextAreaField2 } from "@/components/core/fields";
import { Button } from "@nextui-org/react";

type Inputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactForm() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (loading) {
            return;
        }
        // setLoading(true);
        const body = JSON.stringify(data);
        console.log("🚀 ~ constonSubmit:SubmitHandler<Inputs>= ~ body:", body);
        // try {
        //     // Sign Up
        //     const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API_DOMAIN}/signup`, {
        //         method: "POST",
        //         headers: {
        //             accept: "application/json",
        //             "Content-Type": "application/json",
        //         },
        //         body,
        //     });
        //     const data = await res.json();
        //     setLoading(false);
        //     setError(true);
        //     if (res.status === 400) {
        //         setErrorMessage(data.detail);
        //         return;
        //     } else if (res.status === 422) {
        //         setErrorMessage("Please check your inputs and try again");
        //         return;
        //     }
        // } catch (error) {
        //     setErrorMessage("An error occurred, please contact the administrator");
        //     setLoading(false);
        // }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 space-y-4">
                <TextField
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Ex. John"
                    register={register}
                    error={errors?.name}
                    rules={{ required: true }}
                />

                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Ex. email@email.com"
                    register={register}
                    error={errors.email}
                    rules={{ required: true, email: true }}
                />

                <TextField
                    name="phone"
                    label="Phone"
                    type="text"
                    placeholder="Ex. 09000000000"
                    register={register}
                    error={errors.phone}
                    rules={{ minLength: 11, maxLength: 11 }}
                />

                <TextAreaField2
                    name="message"
                    label="Message"
                    placeholder="Ex. I want to make an enquiry about..."
                    register={register}
                    error={errors?.name}
                    rules={{ required: true }}
                />

                <div className="">
                    {loading ? (
                        <Button color="primary" isLoading size="lg" fullWidth>
                            Loading
                        </Button>
                    ) : (
                        <Button color="primary" variant="shadow" size="lg" fullWidth type="submit">
                            Submit
                        </Button>
                    )}
                </div>
            </div>
            {error && (
                <Alert type="alert" delay={5000} onClose={() => setError(false)}>
                    <p>{errorMessage}</p>
                </Alert>
            )}
        </form>
    );
}
