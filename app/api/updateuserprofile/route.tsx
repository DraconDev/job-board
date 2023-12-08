import { uri } from "@/db/mongo";
import { User } from "@/db/schema";
import { UserType } from "@/type/types";
import mongoose from "mongoose";

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
    updateUser(data);
}
