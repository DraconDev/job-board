import { fetchJobs } from "@/db/mongo";

export async function GET() {
    const jobs = await fetchJobs();

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
