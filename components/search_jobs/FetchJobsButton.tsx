"use client";
import { useAppState } from "@/state/state";

import { useRouter } from "next/navigation";

type Props = {};

const FetchJobsButton = (props: Props) => {
    const state = useAppState((state) => state);
    const router = useRouter();

    // * GET joblist from server joblist route
    async function fetchJobs() {
        const jobs = await fetch("/api/joblist");
        const data = await jobs.json();
        state.setJobList([...data]);
        state.activeJobPost = data[0];
        router.push("/");
    }

    return (
        <div>
            <button
                //  href="/"
                onClick={fetchJobs}
                className="p-2  bg-primary  text-white font-bold rounded w-full border border-accent hover:bg-blue-700 h-full"
            >
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
