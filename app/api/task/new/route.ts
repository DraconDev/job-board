// create new task
import { uri } from "@/db/mongo";
import { Task } from "@/db/schema";
import mongoose from "mongoose";

async function addTask({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    try {
        await mongoose.connect(uri);
        const task = await Task.create({ title, description });
        return task;
    } finally {
        await mongoose.disconnect();
    }
}

export async function POST(request: Request) {
    const data = await request.json();
    const { title, description } = data;
    if (!title || !description) {
        throw new Error("Missing title or description in the request");
    }
    const task = await addTask({ title, description });
    return new Response(JSON.stringify(task), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
