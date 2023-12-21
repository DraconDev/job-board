import { jobSchema, userSchema } from "@/db/schema";
import mongoose from "mongoose";

export type JobType = mongoose.InferSchemaType<typeof jobSchema>;

export type UserType = mongoose.InferSchemaType<typeof userSchema>;

export type Task = {
    title: string;
    description: string;
    status?: string;
    dueDate?: Date;
    postDate: Date;
    priority?: string;
    assignee?: string;
    reviewer?: string;
    bounty: number;
};
