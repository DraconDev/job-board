"use client";
import { useAppState } from "@/state/state";
import { useState } from "react";
import useSWR from "swr";
import ListOfAppliedJobs from "./ListOfAppliedJobs";

type Props = {};

const AllNotifications = (props: Props) => {
    const state = useAppState((state) => state);

    const fetchData = async () => {
        if (!state?.user?.jobs?.jobsApplied) {
            return;
        }
        if (fetching) {
            return;
        }
        setFetching(true);

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
            setFetching(false);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    const { data } = useSWR("/api/find_job_by_id", fetchData, {
        revalidateOnMount: true,
        revalidateInterval: 60000, // Fetch data every 5 seconds
    });

    const [fetching, setFetching] = useState(false);

    // // map over state user applied jobs
    return (
        <div>
            <ListOfAppliedJobs />
        </div>
    );
};

export default AllNotifications;
