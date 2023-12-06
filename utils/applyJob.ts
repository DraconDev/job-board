import { userSchema } from "@/db/schema";

type Props = {
    id: string;
};

function applyJob(params: Props) {
    function fetchUpdateUser() {
        // * fetch update user of user type
        const profile = userSchema;
        profile.
        profile.fetch("/api/updateuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
    }
    fetchUpdateUser();
}
