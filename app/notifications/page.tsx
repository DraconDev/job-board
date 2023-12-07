"use client";
import ListOfAppliedJobs from "@/components/notifications/ListOfAppliedJobs";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {};

const Notifications = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    // fetch user profile

    useEffect(() => {
        const fetchData = async () => {
            if (!session?.data?.user?.email) {
                return;
            }

            if (state?.user) {
                return;
            }

            try {
                const res = await fetch(
                    `/api/fetchuserprofile?email=${session.data.user.email}`,
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

        fetchData();
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
