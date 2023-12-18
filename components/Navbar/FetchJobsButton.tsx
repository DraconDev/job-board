"use client";
import { useAppState } from "@/state/state";
import { useSearchJobs } from "@/utils/filterjob";

import { useRouter } from "next/navigation";

const FetchJobsButton = () => {
    const state = useAppState((state) => state);
    const router = useRouter();
    const SearchJobs = useSearchJobs();

    return (
        <div>
            <button
                onClick={SearchJobs}
                className="p-2  bg-primary  text-white font-bold rounded w-full  hover:bg-accent hover:text-primary  h-full"
            >
                {/* <IoSearchOutline className="h-8 w-8" /> */}
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
