"use client";
import { useAppState } from "@/state/state";
import { JobType } from "@/type/types";
import { useState } from "react";
import Description from "../Description/Description";
import MobileSlideWrapper from "../mobile/MobileSlideWrapper";

const JobCard = ({ job }: { job: JobType }) => {
    const state = useAppState((state) => state);

    const [isJobSidebarOpen, setIsJobSidebarOpen] = useState(false);

    function showDescription() {
        const isMobile = window.innerWidth <= 768; // Adjust the width value as per your requirement
        if (isMobile) {
            setIsJobSidebarOpen(!isJobSidebarOpen);
        } else {
            state.updateActiveJobPost(job);
        }
    }

    return (
        <>
            {isJobSidebarOpen ? (
                <MobileSlideWrapper close={() => setIsJobSidebarOpen(false)}>
                    <Description />
                </MobileSlideWrapper>
            ) : (
                <div
                    className="hover-outline-transition outline-transition"
                    onClick={showDescription}
                >
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <div className="w-full h-[2px] bg-accent"></div>
                    <div className="flex justify-between text-gray-400">
                        <p>{job.company}</p>
                    </div>
                    <div className="text-lg flex   items-center">
                        ${job.salaryMin} - ${`${job.salaryMax}`}
                    </div>
                    {/* <p className="mt-2">
                        {job?.description && job.description.length > 300
                            ? job.description.slice(0, 300) + "..."
                            : job?.description}
                    </p> */}
                    <div className=" flex justify-between items-center">
                        <span className="text-gray-400">
                            {job.date?.toString().slice(0, 10)}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default JobCard;
