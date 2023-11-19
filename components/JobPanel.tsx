import Description from "./Description";
import JobList from "./JobList";

type Props = {};

export default async function JobPanel() {
    return (
        <div className="flex">
            <JobList />
            <Description />
        </div>
    );
}
