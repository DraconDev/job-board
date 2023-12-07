import { disconnectDb, uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

async function getJobsByIds({ jobIds }: { jobIds: string[] }) {
    // console.log(jobIds, "getJobsByIds");

    try {
        // connectDb();
        await mongoose.connect(uri);
        // const objectIds = await jobIds.map((id) => {
        //     let temp = new mongoose.Types.ObjectId(id);
        //     return temp;
        // });

        // const jobsList = await JobPost.find({ _id: { $in: objectIds } });

        // const jobs = await JobPost.find({ _id: { $in: jobIds } });
        // find job by id
        // const jobs = await JobPost.findById("655e038a49c516cb98e81948");

        // *testing
        const jobs = await JobPost.find();

        return jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    } finally {
        disconnectDb();
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

    return jobs;
}
