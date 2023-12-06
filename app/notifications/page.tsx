"use client";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {};

const Notifications = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    // fetch user profile

    useEffect(() => {
        session?.data?.user?.email &&
            fetch(
                `/api/fetchuserprofile?email=${encodeURIComponent(
                    session.data.user.email
                )}`
            )
                .then((res) => res.json())
                .then((data) => (state.user = data));
    }, [session?.data?.user?.email, state]);

    return (
        <div>
            <h1>Applied jobs</h1>
            {JSON.stringify(state)}
        </div>
    );
};

export default Notifications;
