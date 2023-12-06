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
        if (state.user) {
            return;
        }
        fetch(`/api/fetchuserprofile?email=${session.data.user.email}`)
            .then((res) => res.json())
            .then((data) => state.updateUser(data));
    }, [session?.data?.user?.email, state]);

    return (
        <div>
            <h1>Applied jobs</h1>
            {JSON.stringify(state.user)}
            <ListOfAppliedJobs />
        </div>
    );
};

export default Notifications;
