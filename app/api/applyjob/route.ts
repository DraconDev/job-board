import { uri } from "@/db/mongo";
import { User } from "@/db/schema";
import mongoose from "mongoose";

async function applyJob({ _id, email }: { _id: string; email: string }) {
    await mongoose.connect(uri);
    try {
        await User.updateOne(
            { email: email },
            {
                $addToSet: {
                    "jobs.jobsApplied": new mongoose.Types.ObjectId(_id),
                },
            },
            { upsert: true }
        );
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(req: Request) {
    const data = await req.json();
    // get email and id front request
    const { _id, email } = data as { _id: string; email: string };
    if (!_id && !email) {
        throw new Error("Missing _id or email in the request");
    }
    applyJob({ _id, email });
}
