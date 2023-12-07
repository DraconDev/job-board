import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

async function getJobsByIds(jobIds: string[]) {
    await mongoose.connection;

    try {
        // const objectIds = jobIds.map((id) => new mongoose.Types.ObjectId(id));

        // const jobsList = await JobPost.find({ _id: { $in: objectIds } });
        const jobsList = await JobPost.find({ _id: { $in: jobIds } });

        return jobsList;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}

// * get list of jobs by array of ids from server
export async function POST(req: Request) {
    const reqBody = await req.json();
    const ids = reqBody.ids; //
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
        throw new Error("Missing or invalid ids in the request body");
    }
    const jobs = await getJobsByIds(ids);

    return jobs;
}
