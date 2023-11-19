import { fetchJobs } from "@/db/mongo";
import { useAppState } from "@/state/state";

type Props = {};

const FetchJobsButton = (props: Props) => {
    const state = useAppState((state) => state);
    async function handleSearch() {
        console.log("searching");
        const jobs = await fetchJobs();
        console.log(jobs);
        // state.setJobList(jobs);
        // state.setJobList([{ }]);
    }

    return (
        <div>
            <button
                //  href="/"
                onClick={handleSearch}
                className="p-4 bg-primary hover:bg-blue-700 text-white font-bold rounded w-full"
            >
                Search
            </button>
        </div>
    );
};

export default FetchJobsButton;
