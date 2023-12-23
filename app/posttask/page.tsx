"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ITaskFormInput {
    title: string;
    description: string;
    dueDate: Date;
    bounty: number;
}

export default function PostTask() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ITaskFormInput>();

    const onSubmit = async (data: ITaskFormInput) => {
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("api/task/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log("Task created:", result);
            reset(); // Reset form fields after successful submission
            alert("Task successfully created!");
        } catch (error) {
            console.error("Failed to create task:", error);
            setSubmitError("Failed to create task. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", { required: "Title is required." })} />
            {errors.title && <p>{errors.title.message}</p>}

            <textarea
                {...register("description", {
                    required: "Description is required.",
                })}
            />
            {errors.description && <p>{errors.description.message}</p>}

            <input
                type="date"
                {...register("dueDate")}
            />

            <input
                type="number"
                {...register("bounty", {
                    min: { value: 0, message: "Bounty must be positive." },
                })}
            />
            {errors.bounty && <p>{errors.bounty.message}</p>}

            <input
                type="submit"
                disabled={isSubmitting}
            />
        </form>
    );
}
