// * register user with cv
import { uri } from "@/db/mongo";
import { User } from "@/db/schema";
import { UserType } from "@/type/types";
import mongoose from "mongoose";

// * register user with CV
async function registerUser(user: UserType) {
    console.log(user);
    await mongoose.connect(uri);
    try {
        await User.create(user);
    } finally {
        await mongoose.disconnect();
    }
}

// * update user profile or create it
async function updateUser(user: UserType) {
    await mongoose.connect(uri);
    try {
        await User.findOneAndUpdate({ email: user.email });
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    // registerUser(data);
    updateUser(data);
}
