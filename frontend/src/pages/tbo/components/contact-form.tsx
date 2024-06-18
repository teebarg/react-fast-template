"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@/components/core/alert";
import { TextField, TextAreaField, CheckBoxField } from "@/components/core/fields";
import { Button } from "@nextui-org/react";

type Inputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
};

const inputClass = {
    inputWrapper: "!bg-white/70 hover:!bg-white/50 focus:!bg-white/50 !text-blue-700",
    label: "!text-black/60 font-semibold text-lg",
    description: "text-black/30 font-medium",
    input: "focus:!bg-transparent !text-gray-600 !bg-transparent",
    innerWrapper: "focus:!bg-white/50",
    base: "focus:!bg-red-500",
};

export default function ContactForm() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        control,
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
        try {
            // Sign Up
            const res = await fetch(`${import.meta.env.VITE_API_DOMAIN}/message`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body,
            });
            const data = await res.json();
            setLoading(false);
            if (res.ok) {
                return;
            }
            setError(true);
            if (res.status === 400) {
                setErrorMessage(data.detail);
                return;
            } else if (res.status === 422) {
                setErrorMessage("Please check your inputs and try again");
                return;
            }
        } catch (error) {
            setErrorMessage("An error occurred, please contact the administrator");
            setLoading(false);
        }
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
                    classNames={inputClass}
                />

                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Ex. email@email.com"
                    register={register}
                    error={errors.email}
                    rules={{ required: true, email: true }}
                    classNames={inputClass}
                />

                <TextField
                    name="phone"
                    label="Phone"
                    type="text"
                    placeholder="Ex. 09000000000"
                    register={register}
                    error={errors.phone}
                    rules={{ minLength: 11, maxLength: 11 }}
                    classNames={inputClass}
                />

                <TextAreaField
                    name="message"
                    label="Message"
                    placeholder="Ex. I want to make an enquiry about..."
                    description="Your message to us"
                    register={register}
                    error={errors?.name}
                    rules={{ required: true }}
                    classNames={inputClass}
                />

                <div className="flex gap-4">
                    <CheckBoxField name="agreement" register={register} control={control} rules={{ required: true }} />
                    <p className="text-gray-700">I allow this website to store my submission so they can respond to my inquiry.</p>
                </div>

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
