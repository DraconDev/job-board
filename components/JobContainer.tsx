"use client";
import Filter from "@/components/Filter";
import { useAppState } from "@/state/state";
import router from "next/router";
import JobPanel from "./JobPanel";

export default function JobContainer() {
    const state = useAppState((state) => state);
    // useFetchJobIfNone({ state });

    if (state.jobList.length === 0) {
        fetch("/api/joblist")
            .then((jobs) => jobs.json())
            .then((data) => {
                state.setJobList([...data]);
                router.push("/");
            })
            .catch((error) => {
                console.error("Error fetching job list:", error);
            });
    }

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         if (state.jobList.length === 0) {
    //             try {
    //                 const jobs = await fetch("/api/joblist");
    //                 const data = await jobs.json();
    //                 state.setJobList([...data]);
    //                 router.push("/");
    //             } catch (error) {
    //                 console.error("Error fetching job list:", error);
    //             }
    //         }
    //     };

    //     fetchJobs();
    // });

    return (
        <div className="flex flex-col w-full h-full gap-2">
            <Filter />
            <JobPanel />
        </div>
    );
}
