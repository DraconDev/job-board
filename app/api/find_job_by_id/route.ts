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
export async function POST(req: Request) {
    const reqBody = await req.json(); // Here you parse the JSON body of the request
    const ids = reqBody.ids; // Access the ids from the parsed body
    // const { searchParams } = new URL(req.url);
    // const jobIds = searchParams.get("ids");

    if (!ids) {
        throw new Error("Missing ids in the request");
    }

    return getJobsByIds(JSON.parse(ids));
}
