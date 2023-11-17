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
