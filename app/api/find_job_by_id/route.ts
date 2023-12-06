import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

async function getJobsByIds(jobIds: [string]) {
    try {
        await mongoose.connection;

        const objectIds = jobIds.map((id) => new mongoose.Types.ObjectId(id));
        const jobsList = await JobPost.find({ _id: { $in: objectIds } });

        return jobsList;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}

// * get list of jobs by array of ids from server
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const jobIds = searchParams.get("jobIds");
}
