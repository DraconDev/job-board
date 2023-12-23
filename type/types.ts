import { jobSchema, taskSchema, userSchema } from "@/db/schema";
import mongoose from "mongoose";

export type JobType = mongoose.InferSchemaType<typeof jobSchema>;

export type UserType = mongoose.InferSchemaType<typeof userSchema>;

// task type
export type TaskType = mongoose.InferSchemaType<typeof taskSchema>;
