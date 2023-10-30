"use client";
import { useForm } from "react-hook-form";

export default function PostJob() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center h-screen flex-column">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => fetch("/api/mozi").then((res) => res.json())}
            >
                Testing
            </button>
            <div className="">PostJob HELLO</div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="/api/jobs"
                method="POST"
            >
                <input {...register("title")} placeholder="Title" />
                <input {...register("description")} placeholder="Description" />
                <input {...register("salaryMin")} placeholder="Salary Min" />
                <input {...register("salaryMax")} placeholder="Salary Max" />
                <input {...register("location")} placeholder="Location" />
                <input {...register("date")} placeholder="Date" />
                <input {...register("jobType")} placeholder="Job Type" />
                <input {...register("company")} placeholder="Company" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
