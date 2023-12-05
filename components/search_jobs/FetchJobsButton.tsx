"use client";
import { useAppState } from "@/state/state";

import { useRouter } from "next/navigation";

type Props = {
    filterTitle: string;
    filterLocation: string;
};

const FetchJobsButton = ({ filterTitle, filterLocation }: Props) => {
    const state = useAppState((state) => state);
    const router = useRouter();

    const queryParams = new URLSearchParams({
        title: filterTitle,
        location: filterLocation,
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
        if (filterTitle.length < 3) {
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
            state.activeJobPost = data[0];
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
