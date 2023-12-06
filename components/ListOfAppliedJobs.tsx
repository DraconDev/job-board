import { useAppState } from "@/state/state";
import { useEffect } from "react";

type Props = {};

const ListOfAppliedJobs = (props: Props) => {
    const state = useAppState((state) => state);

    useEffect(() => {
        const jobIds = state?.user?.jobs?.jobsApplied;
        // if (jobIds && jobIds.length > 0) {
        //     return;
        // }
        console.log(jobIds, "JobIds");

        fetch("/api/find_job_by_id", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: jobIds }),
        })
            .then((response) => response.json())
            .then((data) => {
                state.setListOfAppliedJobs(data);
            })
            .catch((error) => console.error("Error fetching jobs:", error));
    }, [state?.user?.jobs?.jobsApplied]);

    // // map over state user applied jobs
    return (
        <div>
            <div className="w-full h-[2px] bg-blue-600">
                {state?.listOfAppliedJobs &&
                    state.listOfAppliedJobs.map((job, index) => (
                        <div key={index}>{job.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default ListOfAppliedJobs;
