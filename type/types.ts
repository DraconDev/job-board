import { jobSchema, userSchema } from "@/db/schema";
import mongoose from "mongoose";

// export interface Job {
//     title: string;
//     description: string;
//     salaryMin: number;
//     salaryMax: number;
//     location: string;
//     date: Date;
//     jobType: string;
//     company: string;
//     experience: string;
// }

export type JobType = mongoose.InferSchemaType<typeof jobSchema>;

export type UserType = mongoose.InferSchemaType<typeof userSchema>;
