import { fetchJobsByFilter } from "@/db/mongo";
import { AppState } from "@/state/state";

export async function searchJobs(state: AppState) {
    const queryParams = new URLSearchParams();

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
        const jobs = await fetch(
            `/api/job/find/filter?${queryParams.toString()}`,
            {
                // next: {
                //     revalidate: 3,
                // },
            }
        );
        const data = await jobs.json();
        state.setJobSearchList([...data]);
        state.updateActiveJobPost(data[0]);
        // router.push("/");
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title");
    const location = searchParams.get("location");
    const role = searchParams.get("role");
    const date = searchParams.get("date");
    const salary = searchParams.get("salary");
    const jobLocation = searchParams.get("jobLocation");

    const jobs = await fetchJobsByFilter({
        title: title ?? "",
        location: location ?? "",
        role: role ?? "",
        date: date ?? "",
        salary: salary ?? "",
        jobLocation: jobLocation ?? "",
    });

    // * return jobs
    return new Response(JSON.stringify(jobs));
}
