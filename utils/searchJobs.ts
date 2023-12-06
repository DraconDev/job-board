import { AppState } from "@/state/state";
// * GET joblist from server joblist route

export async function searchJobs(state: AppState) {
    const queryParams = new URLSearchParams({
        title: state.searchTitle,
        location: state.searchLocation,
        experience:
            state.selectedOptions.experience == "Any role"
                ? ""
                : state.selectedOptions.experience,
        date:
            state.selectedOptions.date == "Any date"
                ? ""
                : state.selectedOptions.date,
        salary:
            state.selectedOptions.salary == "Any salary"
                ? "0"
                : state.selectedOptions.salary,
        jobLocation:
            state.selectedOptions.jobLocation == "Any location"
                ? ""
                : state.selectedOptions.jobLocation,
    });

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
