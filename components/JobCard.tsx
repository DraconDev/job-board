import { Job } from "@/type/types";

const JobCard = ({ job }: { job: Job }) => {
    return (
        <div className="p-1 bg-primary flex flex-col">
            <p className={"font-bold"}>{job.title}</p>
            <p>{job.company}</p>
            <p>{job.description}</p>
        </div>
    );
};

export default JobCard;
