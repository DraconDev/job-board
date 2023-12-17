"use client";
import { JobType } from "@/type/types";
import JobCard from "./JobCard";

export default function JobList({ jobs }: { jobs: JobType[] }) {
    return (
        <div className="flex  p-1 bg-primary flex-col  gap-2 overflow-auto h-[90vh]">
            {jobs?.map((job, index) => (
                <JobCard
                    job={job}
                    key={index}
                />
            ))}
        </div>
    );
}
