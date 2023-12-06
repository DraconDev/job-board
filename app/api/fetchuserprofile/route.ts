import { uri } from "@/db/mongo";
import { User } from "@/db/schema";
import mongoose from "mongoose";

async function fetchUser({ email }: { email: string }) {
    await mongoose.connect(uri);
    try {
        const user = await User.findOne({ email });
        return user;
    } finally {
        await mongoose.disconnect();
    }
}

export async function GET(req: Request) {
    // get email from next request
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (email === null || email.length < 6) {
        throw new Error("Missing email in the request");
    }
    const user = await fetchUser({ email });
    // const jobs = await fetchRecentJobs();
    // const jobs = await fetchJobsByFilter({});

    if (!user) {
        throw new Error("User not found");
    }

    // * return jobs
    return new Response(JSON.stringify(user));
}
