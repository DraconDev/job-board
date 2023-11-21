import { fetchJobs } from "@/db/mongo";

export async function GET(request: Request) {
    const jobs = await fetchJobs();

    return new Response(JSON.stringify(jobs), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
}
