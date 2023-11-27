"use client";
import { useAppState } from "@/state/state";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import JobPanel from "./JobPanel";
import NoJobs from "./NoJobs";

export default function JobContainer() {
    const state = useAppState((state) => state);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return !isClient || !state.jobList ? (
        <NoJobs />
    ) : (
        <div className="flex flex-col w-full h-full gap-2">
            <Filter />
            <JobPanel />
        </div>
    );
}
