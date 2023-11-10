"use client";
import { Job } from "@/type/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function PostJob() {
    const { register, handleSubmit } = useForm();

    // const onSubmit<Job> = (data: Job) => {
    //     console.log(data);
    // };

    const onSubmit: SubmitHandler<any> = (data) => console.log(data);

    return (
        <div className="justify-center flex flex-col items-center color text-black">
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
                            {...register("date")}
                            className="mb-2 p-2 rounded outline-none"
                            placeholder="Date"
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
