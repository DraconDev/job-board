"use client";
import { useAppState } from "@/state/state";
import { useSearchJobs } from "@/utils/filterjob";
import { useRouter } from "next/navigation";

const FetchJobsButton = ({ type }: { type: string }) => {
    const state = useAppState((state) => state);
    const SearchJobs = useSearchJobs();
    const router = useRouter();

    const getTasks = () => {
        router.push(
            `/tasks/${encodeURIComponent(
                state.searchTitle ? state.searchTitle : "all"
            )}`
        );
    };

    return (
        <div>
            <button
                onClick={type === "tasks" ? getTasks : SearchJobs}
                className="p-2  bg-primary  text-white font-bold rounded w-full  hover:bg-accent hover:text-primary  h-full"
            >
                {/* <IoSearchOutline className="h-8 w-8" /> */}
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
