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

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    education: [{ degree: String, institution: String, endDate: Date }],
    skills: [String],
    workExperiences: [
        {
            position: String,
            company: String,
            description: String,
            date: String,
        },
    ],
    jobsApplied: [jobSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
