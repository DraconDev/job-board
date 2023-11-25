import { AppState } from "@/state/state";
import router from "next/router";

export const useFetchJobIfNone = ({ state }: { state: AppState }) => {
    if (state.jobList.length === 0) {
        fetch("/api/joblist")
            .then((jobs) => jobs.json())
            .then((data) => {
                state.setJobList([...data]);
                router.push("/");
            })
            .catch((error) => {
                console.error("Error fetching job list:", error);
            });
    }
};
