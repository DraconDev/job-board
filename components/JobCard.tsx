"use client";
import { useAppState } from "@/state/state";
import { Job } from "@/type/types";
import { FaMoneyBill } from "react-icons/fa";

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
            <div className="w-full h-[2px] bg-blue-600"></div>
            <div className="flex justify-between text-gray-400">
                <p className="">{job.company}</p>
                <div className="text-gl flex gap-2 items-center">
                    <FaMoneyBill />
                    {job.salaryMin} - {job.salaryMax}
                </div>
            </div>

            <p className="mt-2">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-400">{job.location}</span>
            </div>
        </div>
    );
};

export default JobCard;
