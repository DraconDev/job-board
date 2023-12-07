"use client";
import { useAppState } from "@/state/state";
import NotificationsCard from "./NotificationsCard";

type Props = {};

const ListOfApplications = (props: Props) => {
    const state = useAppState((state) => state);
    return (
        <div>
            <div className="w-full ">
                {state?.listOfAppliedJobs &&
                    state?.listOfAppliedJobs.length > 0 &&
                    state.listOfAppliedJobs.map((job, index) => (
                        <NotificationsCard
                            key={index}
                            job={job}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ListOfApplications;
