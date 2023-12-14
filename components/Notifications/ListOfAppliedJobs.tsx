"use client";
import { useAppState } from "@/state/state";
import NotificationsCard from "./NotificationsCard";

type Props = {};

const ListOfApplications = (props: Props) => {
    const state = useAppState((state) => state);

    return (
        <div>
            <div className="w-full h-full p-3 gap-3 flex flex-col justify-center items-center">
                <h1 className="text-2xl ">Applied jobs</h1>

                {state?.listOfAppliedJobs &&
                state?.listOfAppliedJobs.length > 0 ? (
                    state.listOfAppliedJobs.map((job, index) => (
                        <NotificationsCard
                            key={index}
                            job={job}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full text-center">
                        {/* Content for when there are no applied jobs */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListOfApplications;
