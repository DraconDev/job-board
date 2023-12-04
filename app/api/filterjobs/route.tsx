import { fetchJobsByFilter } from "@/db/mongo";

export async function GET(request: Request) {
    // * params
    // const { searchParams } = new URL(request.url);
    // const title = searchParams.get("title");
    // const jobs = await fetchJobsByFilter({ title: title || "" });
    const jobs = await fetchJobsByFilter({ title: "Software Engineer" });

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
