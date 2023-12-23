// get list of tasks from mongo

import { uri } from "@/db/mongo";
import { Task } from "@/db/schema";
import mongoose from "mongoose";

async function fetchTasks() {
    try {
        await mongoose.connect(uri);
        const tasks = await Task.find();
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        // Handle the error as needed
    } finally {
        await mongoose.disconnect();
    }
}

export async function GET() {
    const tasks = await fetchTasks();
    return new Response(JSON.stringify(tasks));
}

