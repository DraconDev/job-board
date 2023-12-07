"use client";
import { useAppState } from "@/state/state";
import { useState } from "react";
import useSWR from "swr";

type Props = {};

const ListOfAppliedJobs = (props: Props) => {
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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (!state?.user?.jobs?.jobsApplied) {
    //             return;
    //         }
    //         if (fetching) {
    //             return;
    //         }
    //         setFetching(true);

    //         const jobIds = state.user.jobs.jobsApplied;
    //         console.log(jobIds, "JobIds");

    //         try {
    //             const response = await fetch("/api/find_job_by_id", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({ ids: jobIds }),
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             state.setListOfAppliedJobs(data);
    //             setFetching(false);
    //         } catch (error) {
    //             console.error("Error fetching jobs:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

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
