import { JobType } from "@/type/types";
import { FaMoneyBillAlt } from "react-icons/fa";

const NotificationsCard = ({ job }: { job: JobType }) => {
    return (
        <div
            className="p-2 gap-1 bg-secondary shadow-md rounded-md hover:cursor-pointer hover:transform hover:scale-[1.005] duration-150"
            // onClick={showDescription}
        >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <div className="w-full h-[2px] bg-accent"></div>
            <div className="flex justify-between text-gray-400">
                <p>{job.company}</p>
                <div className="text-gl flex gap-2 items-center">
                    <FaMoneyBillAlt />
                    {job.salaryMin} - {job.salaryMax}
                </div>
            </div>
            <p className="mt-2">{job.description}</p>
            <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-400">{job.city}</span>
            </div>
        </div>
    );
};

export default NotificationsCard;
