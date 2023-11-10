import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
    const res = await request.json();
    const { title, description, location, salaryMin, salaryMax, date } =
        await res;
    return new Response("Job saved", {});
}
