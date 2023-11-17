"use client";
import { experience } from "@/components/Filter";
import ListBoxCustom from "@/components/ListBoxCustom";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PostJob() {
    const { register, handleSubmit } = useForm();
    const [submitting, setSubmitting] = useState(false);
    const [formExperience, setFormExperience] = useState("");

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

    const handleExperienceChange = (selectedOption: any) => {
        setFormExperience(selectedOption.value);
    };

    return (
        <div className="justify-center flex flex-col items-center">
            <p className="text-3xl">Post a job</p>
            <div className="flex flex-wrap">
                <div className="w-1/1 p-4 text-black">
                    <form
                        className="flex flex-col gap-1"
                        onSubmit={handleSubmit(onSubmit)}
                        action="/api/jobs"
                        method="POST"
                    >
                        <input
                            {...register("title")}
                            className="p-2 rounded outline-none"
                            placeholder="Title"
                        />

                        <input
                            {...register("salaryMin")}
                            className="p-2 rounded outline-none"
                            placeholder="Salary Min"
                        />
                        <input
                            {...register("salaryMax")}
                            className="p-2 rounded outline-none"
                            placeholder="Salary Max"
                        />
                        <input
                            {...register("location")}
                            className="p-2 rounded outline-none"
                            placeholder="Location"
                        />
                        <input
                            {...register("jobType")}
                            className="p-2 rounded outline-none"
                            placeholder="Job Type"
                        />
                        <input
                            {...register("company")}
                            className="p-2 rounded outline-none"
                            placeholder="Company"
                        />
                        <textarea
                            {...register("description")}
                            className="p-2 rounded outline-none h-60"
                            placeholder="Description"
                        />
                        <ListBoxCustom
                            list={experience}
                            {...register("experience")}
                            onChange={handleExperienceChange}
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
