import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { checkDB } from "@/db/mongo";

export async function POST() {
    console.log("testing");
    // const data = await getAvailableJobs("job");
    // checkDB().catch(console.dir);
    return "hey";
}
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         const { title, description, location, salaryMin, salaryMax, date } =
//             req.body;

//         // Process the request data and send it to the database or perform any other necessary actions

//         // Example: Save the job post to a database using axios
//         await axios.post("/api/jobs", {
//             title,
//             description,
//             location,
//             salaryMin,
//             salaryMax,
//             date,
//         });

//         res.status(200).json({ message: "Job posted successfully" });
//     } else {
//         res.status(405).json({ message: "Method Not Allowed" });
//     }
// }
