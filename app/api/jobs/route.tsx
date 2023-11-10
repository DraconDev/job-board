import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    if (req.method === "POST") {
        const { title, description, location, salaryMin, salaryMax, date } =
            req.body;

        // console.log(title, description, location, salaryMin, salaryMax, date);
        return new Response("Hello, Next.js!", {});
    }
}
