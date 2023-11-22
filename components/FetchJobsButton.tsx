"use client";
import { useAppState } from "@/state/state";

type Props = {};

const FetchJobsButton = (props: Props) => {
    const state = useAppState((state) => state);

    // * GET joblist from server joblist route
    const handleSearch = async () => {
        const jobs = await fetch("/api/joblist");
        const data = await jobs.json();
        console.log(data);
        state.setJobList([...data]);
    };

    return (
        <div>
            <button
                //  href="/"
                onClick={handleSearch}
                className="p-1 bg-accent  text-white font-bold rounded w-full"
            >
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
