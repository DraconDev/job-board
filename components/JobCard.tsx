import { useAppState } from "@/state/state";
import { Job } from "@/type/types";
import { useState } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import Description from "./Description";
import MobileSlideWrapper from "./mobile/MobileSlideWrapper";

const JobCard = ({ job }: { job: Job }) => {
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
                    className="p-1 bg-secondary shadow-md rounded-md hover:cursor-pointer hover:transform hover:scale-[1.01] duration-150"
                    onClick={showDescription}
                >
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    <div className="w-full h-[2px] bg-blue-600"></div>
                    <div className="flex justify-between text-gray-400">
                        <p>{job.company}</p>
                        <div className="text-gl flex gap-2 items-center">
                            <FaMoneyBillAlt />
                            {job.salaryMin} - {job.salaryMax}
                        </div>
                    </div>
                    <p className="mt-2">{job.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-gray-400">{job.location}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default JobCard;
