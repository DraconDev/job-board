"use client";
import { useAppState } from "@/state/state";
import Filter from "./Filter";
import JobPanel from "./JobPanel";
import NoJobs from "./NoJobs";
export default function JobContainer() {
    const state = useAppState((state) => state);

    if (state.jobList.length === 0) {
        return <NoJobs />;
    }

    return (
        <div className="flex flex-col w-full h-full gap-2">
            <Filter />
            <JobPanel />
        </div>
    );
}
