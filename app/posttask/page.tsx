"use client";
import { CustomForm } from "@/components/UI/Form/CustomForm";
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
        <div className="w-full h-full p-2 flex justify-center">
            {/* <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full  p-2 bg-secondary rounded-md md:w-1/2 gap-2"
            >
                <p className="">Title</p>
                <input
                    {...register("title", { required: "Title is required." })}
                    className="bg-secondary p-2"
                />
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
                    className="bg-secondary p-2"
                />

                <input
                    type="number"
                    {...register("bounty", {
                        min: { value: 0, message: "Bounty must be positive." },
                    })}
                    className="bg-secondary p-2"
                />
                {errors.bounty && <p>{errors.bounty.message}</p>}

                <input
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary p-2"
                />
            </form> */}
            <CustomForm send={onSubmit} />
        </div>
    );
}
