"use client";

import ListBoxCustom from "@/components/ListBoxCustom";
import { useAppState } from "@/state/state";
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

    const state = useAppState((state) => state);

    return (
        <div className="justify-center flex flex-col items-center w-full h-full">
            <p className="text-3xl">Post job</p>
            <div className="flex flex-wrap w-full justify-center">
                <div className="max-w-lg w-full p-4 text-black ">
                    <form
                        className="flex flex-col gap-2 w-full justify-center items-center placeholder-gray-500"
                        onSubmit={handleSubmit(onSubmit)}
                        action="/api/jobs"
                        method="POST"
                    >
                        <input
                            {...register("title")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Title"
                        />

                        <input
                            {...register("salaryMin")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Salary Min"
                        />
                        <input
                            {...register("salaryMax")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Salary Max"
                        />
                        <input
                            {...register("location")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Location"
                        />
                        <input
                            {...register("jobType")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Job Type"
                        />
                        <input
                            {...register("company")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full"
                            placeholder="Company"
                        />
                        <textarea
                            {...register("description")}
                            className="p-2 rounded outline-none h-60 w-full placeholder-gray-500"
                            placeholder="Description"
                        />
                        <ListBoxCustom
                            type={state.experience}
                            {...register("experience")}
                            name="experience"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
