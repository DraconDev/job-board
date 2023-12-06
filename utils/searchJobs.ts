import { AppState } from "@/state/state";
// * GET joblist from server joblist route

export async function searchJobs(state: AppState) {
    const queryParams = new URLSearchParams();

    if (state.searchTitle) {
        queryParams.append("title", state.searchTitle);
    }

    if (state.searchLocation) {
        queryParams.append("location", state.searchLocation);
    }

    if (
        state.selectedOptions.experience &&
        state.selectedOptions.experience !== "Any role"
    ) {
        queryParams.append("experience", state.selectedOptions.experience);
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
        const jobs = await fetch(`/api/filterjobs?${queryParams.toString()}`, {
            next: {
                revalidate: 3,
            },
        });
        const data = await jobs.json();
        state.setJobList([...data]);
        state.updateActiveJobPost(data[0]);
        // router.push("/");
    }
}
