// get list of tasks from mongo

import { uri } from "@/db/mongo";
import { Task } from "@/db/schema";
import mongoose from "mongoose";

async function fetchTasks(query: string) {
    try {
        await mongoose.connect(uri);
        let tasks;
        if (query === "" || query === "all") {
            tasks = await Task.find();
        } else {
            tasks = await Task.find({
                title: { $regex: query, $options: "i" },
            });
        }
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        // Handle the error as needed
    } finally {
        await mongoose.disconnect();
    }
}

export async function GET(req: Request) {
    // get query params from next request
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("search");

    const tasks = await fetchTasks(query ?? "all");
    return new Response(JSON.stringify(tasks));
}
