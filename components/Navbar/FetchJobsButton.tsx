"use client";
import { searchJobs } from "@/app/api/job/find/filter/route";
import { useAppState } from "@/state/state";

import { useRouter } from "next/navigation";

const FetchJobsButton = () => {
    const state = useAppState((state) => state);
    const router = useRouter();

    return (
        <div>
            <button
                onClick={() => searchJobs(state)}
                className="p-2  bg-primary  text-white font-bold rounded w-full  hover:bg-accent hover:text-primary  h-full"
            >
                {/* <IoSearchOutline className="h-8 w-8" /> */}
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
