// create new task
import { uri } from "@/db/mongo";
import { Task } from "@/db/schema";
import { TaskType } from "@/type/types";
import mongoose from "mongoose";

async function addTask(info: TaskType) {
    try {
        await mongoose.connect(uri);
        const task = await Task.create({ ...info });
        return task;
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    const { title, description } = data as TaskType;
    if (!title || !description) {
        throw new Error("Missing title or description in the request");
    }
    const task = await addTask({ ...data });
    return new Response(JSON.stringify(task), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
