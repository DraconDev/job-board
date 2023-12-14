import Description from "../Description/Description";
import JobList from "./JobList";

type Props = {};

export default function JobPanel() {
    return (
        <div className="flex bg-primary w-full">
            <div className="flex flex-col grow w-2/5">
                <JobList />
            </div>
            <div className="flex hidden flex-col grow w-3/5 md:block p-1">
                <Description />
            </div>
        </div>
    );
}
