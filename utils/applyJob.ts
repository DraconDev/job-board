import { UserType } from "@/type/types";

function fetchUpdateUser(props: UserType) {
    // * fetch update user of user type
    // const profile = { email: session.data?.user?.email } as UserType;

    const profile = {
        email: props.email,
        // jobsApplied: [id],
    } as UserType;

    fetch("/api/updateuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    });
}

// TODO redo page
