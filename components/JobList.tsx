"use client";
import { useAppState } from "@/state/state";
import JobCard from "./JobCard";

export default function JobList() {
    const state = useAppState((state) => state);
    return (
        <div className="flex w-2/5 p-1 bg-primary flex-col h-screen">
            {state.jobList.map((job, index) => (
                <JobCard job={job} key={index} />
            ))}
        </div>
    );
}
