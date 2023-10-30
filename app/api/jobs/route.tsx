import { NextApiRequest, NextApiResponse } from "next";
import { addJob } from "@/db/mongo";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { title, description, location, salaryMin, salaryMax, date } =
            req.body;
        // checkDB().catch(console.dir);
        // addJob(title, description, location, salaryMin, salaryMax, date);
        return new Response("Hello, Next.js!", {});
    }
}
