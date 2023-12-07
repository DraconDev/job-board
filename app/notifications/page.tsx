"use client";
import ListOfAppliedJobs from "@/components/ListOfAppliedJobs";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {};

const Notifications = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    // fetch user profile

    useEffect(() => {
        if (!session?.data?.user?.email) {
            return;
        }
        // if (state.user) {
        //     return;
        // }
        fetch(`/api/fetchuserprofile?email=${session.data.user.email}`, {
            next: {
                revalidate: 120,
            },
        })
            .then((res) => res.json())
            .then((data) => state.updateUser(data));
    }, [session?.data?.user?.email]);

    return (
        <div className="flex flex-col gap-1  h-full p-1 justify-center items-center">
            <h1>Notifications</h1>
            {JSON.stringify(state.user)}
            <h1>Applied jobs</h1>
            <ListOfAppliedJobs />
        </div>
    );
};

export default Notifications;
