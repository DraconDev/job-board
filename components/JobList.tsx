"use client";
import { useAppState } from "@/state/state";
import JobCard from "./JobCard";

export default function JobList() {
    const state = useAppState((state) => state);
    return (
        <div className="flex  p-1 bg-primary flex-col h-full gap-2">
            {state.jobList.map((job, index) => (
                // <div key={index}></div>
                <JobCard
                    job={job}
                    key={index}
                />
            ))}
        </div>
    );
}
