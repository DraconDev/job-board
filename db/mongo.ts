import mongoose from "mongoose";
import { User } from "./schema";

export const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.cc5lbfe.mongodb.net/?retryWrites=true&w=majority`;

export async function connectDb() {
    await mongoose.connect(uri);
}

export async function disconnectDb() {
    await mongoose.disconnect();
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
