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

    return state.jobList.length == 0 || !isClient ? (
        <div className="flex flex-col w-full h-full gap-2">
            <div className="h-10">{isClient && <Filter />}</div>
            <NoJobs />
        </div>
    ) : (
        <div className="flex flex-col w-full h-full ">
            {/* {isClient && <Filter />} */}
            <Filter />
            <JobPanel />
        </div>
    );
}
