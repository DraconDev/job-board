import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: String,
    description: String,
    salaryMin: Number,
    salaryMax: Number,
    location: String,
    date: Date,
    jobType: String,
    company: String,
    experience: String,
    
});

export const JobPost = mongoose.model("Job", jobSchema);
