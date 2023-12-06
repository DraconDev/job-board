import { UserType } from "@/type/types";

type Props = {
    id: string;
};

export function useApplyJob() {
    // const session = useSession();
    function fetchUpdateUser() {
        // * fetch update user of user type
        // const profile = { email: session.data?.user?.email } as UserType;
        const profile = { email: "newtesting@gmail.com" } as UserType;

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
