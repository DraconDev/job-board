"use client";

import AllNotifications from "@/components/Notifications/AllNotifications";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import useSWR from "swr";

type Props = {};

const Notifications = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    // fetch user profile

    const fetchUserProfile = async () => {
        if (!session?.data?.user?.email) {
            return;
        }

        // if (state?.user) {
        //     return;
        // }

        try {
            const res = await fetch(
                `/api/user/profile/get?email=${session.data.user.email}`,
                {
                    next: {
                        revalidate: 120,
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Failed to fetch user profile");
            }

            const data = await res.json();
            state.updateUser(data);
        } catch (error) {
            console.error("Error fetching user profile:", error);
            // Handle the error as needed
        }
    };

    const { data } = useSWR("/api/user/profile/get", fetchUserProfile, {
        revalidateOnMount: true,
        revalidateInterval: 60000, // Fetch data every minute
    });

    return (
        <div className="flex flex-col gap-2  h-full p-1 justify-center items-center">
            <h2 className="text-2xl ">Notifications</h2>
            <div className="text-gray-400"> No current notifications</div>

            <AllNotifications />
        </div>
    );
};

export default Notifications;
