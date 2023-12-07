import { uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import { JobType } from "@/type/types";
import mongoose from "mongoose";

async function addJob(job: JobType) {
    console.log(job);
    await mongoose.connect(uri);
    try {
        await JobPost.create(job);
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    const {
        title,
        description,
        location,
        salaryMin,
        salaryMax,
        date,
        jobType,
        company,
        experience,
    } = (await data) as JobType;

    addJob({
        title,
        description,
        location,
        salaryMin,
        salaryMax,
        date,
        jobType,
        company,
        experience,
    });

    return new Response("Job saved", {});
}
