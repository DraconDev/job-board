"use client";
import { useAppState } from "@/state/state";
import JobCard from "./JobCard";

export default function JobList() {
    const state = useAppState((state) => state);
    return (
        <div className="flex  p-1 bg-primary flex-col  gap-2 overflow-auto h-[90vh]">
            {state.jobList.map((job, index) => (
                <JobCard
                    job={job}
                    key={index}
                />
            ))}
        </div>
    );
}
