import { Job, UserType } from "@/type/types";
import mongoose from "mongoose";
import { JobPost, User } from "./schema";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority`;

// async function connectDb() {
//     await mongoose.connect(uri);
// }

export async function addJob(job: Job) {
    console.log(job);
    await mongoose.connect(uri);
    try {
        await JobPost.create(job);
    } finally {
        await mongoose.disconnect();
    }
}

// * fetch most recent jobs
export async function fetchJobs() {
    await mongoose.connect(uri);
    try {
        const jobs = await JobPost.find();
        return jobs;
    } finally {
        await mongoose.disconnect();
    }
}

// * fetched jobs by filter
export async function fetchJobsByFilter(filter: {}) {
    await mongoose.connect(uri);
    try {
        const jobs = await JobPost.find({ jobType: "software" });
        return jobs;
    } finally {
        await mongoose.disconnect();
    }
}

// * register user with CV
export async function registerUser(user: UserType) {
    console.log(user);
    await mongoose.connect(uri);
    try {
        await User.create(user);
    } finally {
        await mongoose.disconnect();
    }
}
