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
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setIsFetching(true);

        async function fetchRecentJobs() {
            try {
                const jobs = await fetch("/api/joblist");
                const data = await jobs.json();
                state.setJobList([...data]);
                state.activeJobPost = data[0];
                router.push("/");
            } catch (error) {
                console.error("Error fetching recent jobs:", error);
                // Handle the error as needed
            } finally {
                setIsFetching(false);
            }
        }

        if (state.jobList.length === 0) {
            fetchRecentJobs();
        }
    }, []); // Empty dependency array to run only once on mount

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
