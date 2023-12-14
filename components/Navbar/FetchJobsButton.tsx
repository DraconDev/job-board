"use client";
import { useAppState } from "@/state/state";
import { searchJobs } from "@/utils/searchJobs";

import { useRouter } from "next/navigation";

const FetchJobsButton = () => {
    const state = useAppState((state) => state);
    const router = useRouter();

    return (
        <div>
            <button
                onClick={() => searchJobs(state)}
                className="p-2  bg-primary  text-white font-bold rounded w-full  hover:bg-accent h-full"
            >
                {/* <IoSearchOutline className="h-8 w-8" /> */}
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;