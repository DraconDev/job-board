"use client";
import { useAppState } from "@/state/state";
import { Job } from "@/type/types";

const JobCard = ({ job }: { job: Job }) => {
    const state = useAppState((state) => state);

    function updateDescription() {
        state.updateActiveJobPost(job);
    }

    return (
        <div
            className="p-3 bg-secondary shadow-md rounded-md "
            onClick={updateDescription}
        >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-500">{job.company}</p>
            <p className="mt-2">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-400">{job.location}</span>
            </div>
        </div>
    );
};

export default JobCard;
