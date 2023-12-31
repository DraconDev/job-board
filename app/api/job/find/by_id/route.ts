import { uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

async function getJobsByIds({ jobIds }: { jobIds: string[] }) {
    // if (mongoose.connection.readyState !== 1) {
    //     console.error(
    //         "Failed to connect to MongoDB. State:",
    //         mongoose.connection.readyState
    //     );
    //     throw new Error("Failed to connect to MongoDB.");
    // }
    try {
        await mongoose.connect(uri);
        // * works single id
        // const jobs = await JobPost.findById(jobIds[0]);
        console.log(mongoose.connection);
        // * works multiple ids
        // const objectIds = jobIds.map((id) => {
        //     return new mongoose.Types.ObjectId(id);
        // });
        // const jobs2 = await JobPost.find({ _id: { $in: objectIds } });

        const jobs = await JobPost.find({ _id: { $in: jobIds } });

        return jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    } finally {
        await mongoose.disconnect();
    }
}

// * get list of jobs by array of ids from server
export async function POST(req: Request) {
    const data = await req.json();
    const { ids } = (await data) as { ids: string[] }; //
    if (!ids || ids.length === 0) {
        throw new Error("Missing or invalid ids in the request body");
    }
    const jobs = await getJobsByIds({ jobIds: ids as string[] });

    return new Response(JSON.stringify(jobs));
}
