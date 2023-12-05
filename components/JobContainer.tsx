"use client";
import { useAppState } from "@/state/state";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import JobPanel from "./JobPanel";
import NoJobs from "./NoJobs";

export default function JobContainer() {
    const state = useAppState((state) => state);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    async function fetchRecentJobs() {
        const jobs = await fetch("/api/joblist");
        const data = await jobs.json();
        state.setJobList([...data]);
        state.activeJobPost = data[0];
        router.push("/");
    }

    if (state.jobList.length == 0) {
        fetchRecentJobs();
    }

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
