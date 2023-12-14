import { uri } from "@/db/mongo";
import { User } from "@/db/schema";
import { UserType } from "@/type/types";
import mongoose from "mongoose";

async function updateUser(user: UserType) {
    try {
        await mongoose.connect(uri);

        await User.findOneAndUpdate({ email: user.email }, user, {
            upsert: true,
        });

        // // Optionally, you can return the updated user
        // const updatedUser = await User.findOne({ email: user.email });
        // return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error; // Rethrow the error to be caught by the caller
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(req: Request, res: Response) {
    try {
        const data = await req.json();
        console.log(data);

        const updatedUser = await updateUser(data);

        // return success in next 14
        // return new Response(JSON.stringify(updatedUser), {
        //     status: 200,
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
    } catch (error) {
        console.error("Error processing request:", error);
        // res.status(500).json({
        //     success: false,
        //     error: "Internal Server Error",
        // });
    }
}
