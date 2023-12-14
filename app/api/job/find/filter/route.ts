import { fetchJobsByFilter } from "@/db/mongo";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title");
    const location = searchParams.get("location");
    const role = searchParams.get("role");
    const date = searchParams.get("date");
    const salary = searchParams.get("salary");
    const jobLocation = searchParams.get("jobLocation");

    const jobs = await fetchJobsByFilter({
        title: title ?? "",
        location: location ?? "",
        role: role ?? "",
        date: date ?? "",
        salary: salary ?? "",
        jobLocation: jobLocation ?? "",
    });

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
