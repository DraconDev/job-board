import mongoose from "mongoose";

export async function POST(request: Request) {
    const data = await request.json();
    const { title, description, location, salaryMin, salaryMax, date } =
        await data;
    const jobPost = new Job(data);
    await jobPost.save();
    await mongoose.disconnect();

    return new Response("Job saved", {});
}
