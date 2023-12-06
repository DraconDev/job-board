"use client";
import { useAppState } from "@/state/state";

import { useRouter } from "next/navigation";

const FetchJobsButton = () => {
    const state = useAppState((state) => state);
    const router = useRouter();

    const queryParams = new URLSearchParams({
        title: state.searchTitle,
        location: state.searchLocation,
        experience:
            state.selectedOptions.experience == "Any role"
                ? ""
                : state.selectedOptions.experience,
        date:
            state.selectedOptions.date == "Any date"
                ? ""
                : state.selectedOptions.date,
        salary:
            state.selectedOptions.salary == "Any salary"
                ? "0"
                : state.selectedOptions.salary,
        jobLocation:
            state.selectedOptions.jobLocation == "Any location"
                ? ""
                : state.selectedOptions.jobLocation,
    });

    // * GET joblist from server joblist route
    async function fetchRecentJobs() {
        if (state.searchTitle.length < 3) {
        } else {
            const jobs = await fetch(
                `/api/filterjobs?${queryParams.toString()}`,
                {
                    next: {
                        revalidate: 3,
                    },
                }
            );
            const data = await jobs.json();
            state.setJobList([...data]);
            state.updateActiveJobPost(data[0]);
            router.push("/");
        }
    }

    return (
        <div>
            <button
                //  href="/"
                onClick={fetchRecentJobs}
                className="p-2  bg-primary  text-white font-bold rounded w-full border border-accent hover:bg-blue-700 h-full"
            >
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
