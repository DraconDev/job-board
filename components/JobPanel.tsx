import Description from "./Description";
import JobList from "./JobList";

type Props = {};

export default async function JobPanel() {
    return (
        <div className="flex bg-primary w-full">
            <div className="flex flex-col grow w-2/5">
                <div className="text-xl p-3">Jobs</div>
                <JobList />
            </div>
            <div className="flex flex-col grow w-3/5">
                <div className="text-xl p-3">Description</div>
                <Description />
            </div>
        </div>
    );
}
