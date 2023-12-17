import { uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

async function fetchRecentJobs() {
    // serach by date

    try {
        await mongoose.connect(uri);
        // const jobs = await JobPost.find().sort({ date: -1 }).limit(50);
        const jobs = await JobPost.find();

        return jobs;
    } catch (error) {
        console.error("Error fetching recent jobs:", error);
        // Handle the error as needed
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
