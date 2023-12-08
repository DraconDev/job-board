import { UserType } from "@/type/types";
import mongoose from "mongoose";
import { JobPost, User } from "./schema";

export const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority`;

export async function connectDb() {
    await mongoose.connect(uri);
}

export async function disconnectDb() {
    await mongoose.disconnect();
}

// * fetch most recent jobs

type FilterType = {
    title: string;
    location?: string;
    role?: string;
    date?: string;
    salary: string;
    jobLocation?: string;
};

// * fetched jobs by filter
export async function fetchJobsByFilter(filter: FilterType) {
    await mongoose.connect(uri);

    const salary = parseInt(filter.salary.replace(/\D/g, ""));

    const query: any = {
        title: { $regex: filter.title, $options: "i" },
    };

    if (filter.location !== undefined && filter.location !== "") {
        query.location = { $regex: filter.location, $options: "i" };
    }

    if (filter.role !== undefined && filter.role !== "") {
        query.role = {
            $gte: filter.role,
        };
    }

    if (filter.date !== undefined && filter.date !== "") {
        switch (filter.date) {
            case "Last day":
                query.date = {
                    $gte: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
                };
            case "Last week":
                query.date = {
                    $gte: new Date(
                        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
                    ),
                };
                break;
            case "Last month":
                query.date = {
                    $gte: new Date(
                        new Date().getTime() - 30 * 24 * 60 * 60 * 1000
                    ),
                };
                break;
            default:
                break;
        }
    }

    if (filter.salary !== undefined && filter.salary !== "") {
        query.salaryMin = { $gte: salary };
    }

    if (filter.jobLocation !== undefined && filter.jobLocation !== "") {
        query.jobType = filter.jobLocation;
    }

    try {
        const jobs = await JobPost.find(query);
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

// * update user profile or create it
export async function updateUser(user: UserType) {
    await mongoose.connect(uri);
    try {
        await User.findOneAndUpdate({ email: user.email });
    } finally {
        await mongoose.disconnect();
    }
}

export async function fetchUserBasedOnEmail({ email }: { email: string }) {
    await mongoose.connect(uri);
    try {
        const user = await User.findOne({ email });
        return user;
    } finally {
        await mongoose.disconnect();
    }
}
