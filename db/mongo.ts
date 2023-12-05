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
export async function fetchRecentJobs() {
    await mongoose.connect(uri);

    // serach by date

    try {
        const jobs = await JobPost.find().sort({ date: -1 }).limit(50);
        return jobs;
    } finally {
        await mongoose.disconnect();
    }
}

type FilterType = {
    title: string;
    location?: string;
    experience?: string;
    date?: string;
    salary?: string;
    jobLocation?: string;
};

// * fetched jobs by filter
export async function fetchJobsByFilter(filter: FilterType) {
    await mongoose.connect(uri);
    try {
        // * only 2 jobs - works
        // const jobs = await JobPost.find().limit(2);
        // * find only jobs with software in the title - works
        const jobs = await JobPost.find({
            title: { $regex: filter.title, $options: "i" },
        });

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
