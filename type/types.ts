// import { Document } from "mongoose";

// export interface Job extends Document {
//     title: string;
//     description: string;
//     salaryMin: number;
//     salaryMax: number;
//     location: string;
//     date: Date;
//     jobType: string;
//     company: string;
// }

export interface Job {
    title: string;
    description: string;
    salaryMin: number;
    salaryMax: number;
    location: string;
    date: Date;
    jobType: string;
    company: string;
    experience: string;
}

export interface IUser {
    fullName: string;
    email: string;
    phoneNumber: string;
    education: { degree: string; institution: string; endDate: Date }[];
    skills: string[];
    workExperiences: {
        position: string;
        company: string;
        description: string;
        date: string;
    }[];
    jobsApplied: Job[]; // Assuming jobSchema is defined elsewhere
}

// export type UserType = mongoose.InferSchemaType<typeof userSchema>;
