"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PostJob() {
    const { register, handleSubmit } = useForm();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit: SubmitHandler<any> = async (data) => {
        const currentDate = new Date();
        setSubmitting(true);

        try {
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, date: currentDate }),
            });

            if (response.ok) {
                console.log("Job posted successfully");
            } else {
                console.error("Failed to post job");
            }
        } catch (error) {
            console.error("Error:", error);
        }

        setSubmitting(false);
    };

    return (
        <div className="justify-center flex flex-col items-center color">
            <p className="text-3xl">Post a job</p>
            <div className="flex flex-wrap">
                <div className="w-1/1 p-4">
                    <form
                        className="flex flex-col"
                        onSubmit={handleSubmit(onSubmit)}
                        action="/api/jobs"
                        method="POST"
                    >
                        <input
                            {...register("title")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Title"
                        />
                        <input
                            {...register("description")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Description"
                        />
                        <input
                            {...register("salaryMin")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Salary Min"
                        />
                        <input
                            {...register("salaryMax")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Salary Max"
                        />
                        <input
                            {...register("location")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Location"
                        />
                        <input
                            {...register("jobType")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Job Type"
                        />
                        <input
                            {...register("company")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Company"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
