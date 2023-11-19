import Filter from "@/components/Filter";
import JobPanel from "./JobPanel";

export default function JobContainer() {
    // const data = use(fetchData());
    return (
        <div className="flex flex-col w-full h-full">
            <Filter />
            <JobPanel />
        </div>
    );
}
