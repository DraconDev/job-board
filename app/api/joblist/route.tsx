import { uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

export async function fetchRecentJobs() {
    await mongoose.connect(uri);

    // serach by date

    try {
        // const jobs = await JobPost.find().sort({ date: -1 }).limit(50);
        const jobs = await JobPost.find();

        return jobs;
    } finally {
        await mongoose.disconnect();
    }
}

export async function GET() {
    const jobs = await fetchRecentJobs();
    // const jobs = await fetchJobsByFilter({});

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
