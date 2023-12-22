"use client";
import ListBoxCustom from "@/components/Filter/ListBoxCustom";
import { QuillBox } from "@/components/Quill/QuillBox";
import { useAppState } from "@/state/state";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PostJob() {
    const { register, handleSubmit } = useForm();
    const [userText, setUserText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const onSubmit: SubmitHandler<any> = async (data) => {
        const currentDate = new Date();
        if (submitting) {
            return;
        }
        setSubmitting(true);
        try {
            const response = await fetch("/api/job/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    description: userText,
                    date: currentDate,
                    experience: state.selectedOptions["experience"],
                    jobType: state.selectedOptions["jobType"],
                    role: state.selectedOptions["role"],
                }),
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

    const state = useAppState((state) => state);

    return (
        <div className="pt-2 justify-center flex flex-col items-center w-full h-full ">
            <p className="text-3xl p-2">Post job</p>
            <div className="flex  w-full justify-center">
                <div className="max-w-lg w-full h-full text-black px-2 ">
                    <form
                        className="flex flex-col gap-3 w-full justify-center items-center placeholder-gray-500"
                        onSubmit={() => handleSubmit(onSubmit)}
                        action="/api/job/create"
                        method="POST"
                    >
                        <input
                            {...register("title")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full bg-secondary text-white"
                            placeholder="Title"
                        />
                        <input
                            {...register("salaryMin")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full bg-secondary text-white"
                            placeholder="Salary Min"
                        />
                        <input
                            {...register("salaryMax")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full bg-secondary text-white"
                            placeholder="Salary Max"
                        />
                        <input
                            {...register("city")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full bg-secondary text-white"
                            placeholder="city"
                        />
                        <input
                            {...register("company")}
                            className="p-2 rounded outline-none placeholder-gray-500 w-full bg-secondary text-white"
                            placeholder="Company"
                        />

                        <h1 className="text-3xl text-white">Experience</h1>
                        <ListBoxCustom
                            type={state.experience}
                            name="experience"
                            flavor=" years of experience"
                        />
                        <ListBoxCustom
                            type={state.jobType.slice(1)}
                            name="jobType"
                        />
                        <ListBoxCustom
                            type={state.role.slice(1)}
                            name="role"
                        />
                        <div className="text-white text-3xl">Description</div>
                        <QuillBox
                            userText={userText}
                            setUserText={setUserText}
                        />
                        {/* <textarea
                            {...register("description")}
                            className="p-2 rounded outline-none h-60 w-full bg-secondary text-white placeholder-gray-500"
                            placeholder="Description"
                        /> */}
                        <button
                            type="submit"
                            className="bg-accent hover:bg-secondary border-2 border-accent  text-white px-4 py-2 rounded w-full "
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
