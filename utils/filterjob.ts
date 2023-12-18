import { useAppState } from "@/state/state";
import { useRouter } from "next/navigation";
export function useSearchJobs() {
    const router = useRouter();
    const state = useAppState((state) => state);
    async function Search() {
        const title = state.searchTitle.trim().toLowerCase();
        if (title.length < 3) {
            alert("Please enter at least 3 characters");
            return;
        }
        const queryParams = new URLSearchParams();

        if (state.searchTitle) {
            queryParams.append("title", title);
        }

        if (state.searchLocation) {
            queryParams.append("location", state.searchLocation);
        }

        if (
            state.selectedOptions.role &&
            state.selectedOptions.role !== "Any role"
        ) {
            queryParams.append("role", state.selectedOptions.role);
        }

        if (
            state.selectedOptions.date &&
            state.selectedOptions.date !== "Any time"
        ) {
            queryParams.append("date", state.selectedOptions.date);
        }

        if (
            state.selectedOptions.salary &&
            state.selectedOptions.salary !== "Any salary"
        ) {
            queryParams.append("salary", state.selectedOptions.salary);
        }

        if (
            state.selectedOptions.jobLocation &&
            state.selectedOptions.jobLocation !== "Any location"
        ) {
            queryParams.append(
                "jobLocation",
                state.selectedOptions.jobLocation
            );
        }

        try {
            const jobs = await fetch(
                `/api/job/find/filter?${queryParams.toString()}`
                // {
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                // }
            );

            const data = await jobs.json();
            console.log(data);
            state.setJobSearchList([...data]);
            state.updateActiveJobPost(data[0]);

            await router.push(
                `/search/${encodeURIComponent(state.searchTitle)}`
            );
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }
    return Search;
}
