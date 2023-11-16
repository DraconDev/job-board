import { Job } from "@/type/types";
import mongoose from "mongoose";
import { JobPost } from "./schema";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority`;

async function connectDb() {
    await mongoose.connect(uri);
}

export async function addJob(job: Job) {
    console.log(job);
    await connectDb();
    try {
        await JobPost.create(job);
    } finally {
        await mongoose.disconnect();
    }
}
