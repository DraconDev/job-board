import mongoose, { Schema } from "mongoose";

export const jobSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String, //
    description: String, //
    salaryMin: Number, //
    salaryMax: Number, //
    city: String, //
    date: Date, // -
    jobType: {
        type: String,
        enum: ["Remote", "Hybrid", "On-site"],
    },
    company: String, //
    role: {
        type: String,
        enum: [
            "Internship",
            "Entry level",
            "Associate",
            "Mid-Senior level",
            "Director",
            "Executive",
        ],
    },
    experience: {
        type: String,
        enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
});

export const JobPost = mongoose.model("Job", jobSchema);

export const userSchema = new Schema({
    email: String,
    profile: {
        fullName: String,
        // email: String,
        // phoneNumber: String,
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
    },
    jobs: {
        jobsApplied: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
    },
});

export const User = mongoose.model("User", userSchema);
