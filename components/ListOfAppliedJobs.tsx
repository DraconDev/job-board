"use client";
import { useAppState } from "@/state/state";
import { useEffect } from "react";

type Props = {};

const ListOfAppliedJobs = (props: Props) => {
    const state = useAppState((state) => state);

    useEffect(() => {
        const fetchData = async () => {
            if (!state?.user?.jobs?.jobsApplied) {
                return;
            }

            const jobIds = state.user.jobs.jobsApplied;
            console.log(jobIds, "JobIds");

            try {
                const response = await fetch("/api/find_job_by_id", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ids: jobIds }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                state.setListOfAppliedJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchData();
    }, [state?.user?.jobs?.jobsApplied]);

    // // map over state user applied jobs
    return (
        <div>
            <div className="w-full h-[2px] bg-blue-600">
                {state?.listOfAppliedJobs &&
                    state.listOfAppliedJobs.map((job, index) => (
                        <div key={index}>{/* {job.title} */}</div>
                    ))}
            </div>
        </div>
    );
};

export default ListOfAppliedJobs;
