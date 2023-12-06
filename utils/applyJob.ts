import { UserType } from "@/type/types";
import { useSession } from "next-auth/react";

type Props = {
    id: string;
};

function useApplyJob() {
    const session = useSession();
    function fetchUpdateUser() {
        // * fetch update user of user type
        const profile = { email: session.data?.user?.email } as UserType;
        fetch("/api/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile),
        });
    }
    fetchUpdateUser();
}
