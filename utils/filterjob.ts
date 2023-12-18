import { AppState } from "@/state/state";
import router from "next/router";
export async function searchJobs(state: AppState) {
    const queryParams = new URLSearchParams();

    console.log(state);

    if (state.searchTitle) {
        queryParams.append("title", state.searchTitle);
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
        queryParams.append("jobLocation", state.selectedOptions.jobLocation);
    }

    if (state.searchTitle.length < 3) {
    } else {
        try {
            const jobs = await fetch(
                `/api/job/find/filter?${queryParams.toString()}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await jobs.json();
            console.log(data);
            state.setJobSearchList([...data]);
            state.updateActiveJobPost(data[0]);

            // ! todo: redirect
            await router
                .push(`/search/terminator`)
                // .push(`/search/${encodeURIComponent(state.searchTitle)}`)
                .then(() => {
                    console.log("Redirected successfully!");
                })
                .catch((error) => {
                    console.error("Failed to redirect:", error);
                });
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            // Code to run regardless of success or failure
            // ...
        }
    }
}
