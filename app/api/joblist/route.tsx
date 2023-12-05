import { fetchRecentJobs } from "@/db/mongo";

export async function GET() {
    const jobs = await fetchRecentJobs();
    // const jobs = await fetchJobsByFilter({});

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
