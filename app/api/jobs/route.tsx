import { addJob, checkDB } from "@/db/mongo";
import { Job } from "@/type/types";

export async function POST(request: Request) {
    checkDB();
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
    } = (await data) as Job;

    addJob({
        title,
        description,
        location,
        salaryMin,
        salaryMax,
        date,
        jobType,
        company,
    });

    return new Response("Job saved", {});
}
