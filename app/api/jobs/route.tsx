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
        city,
        salaryMin,
        salaryMax,
        date,
        jobType,
        company,
        role,
        experience,
    } = await data;

    if (
        !title ||
        !description ||
        !city ||
        !salaryMin ||
        !salaryMax ||
        !date ||
        !jobType ||
        !company ||
        !role ||
        !experience
    ) {
        return new Response("Missing required fields", { status: 400 });
    }

    if (parseInt(salaryMin) > parseInt(salaryMax)) {
        return new Response("Invalid salary range", { status: 400 });
    }

    addJob({
        _id: new mongoose.Types.ObjectId(),
        title,
        description,
        city,
        salaryMin,
        salaryMax,
        date,
        jobType,
        company,
        role,
        experience,
    });

    return new Response("Job saved", {});
}
