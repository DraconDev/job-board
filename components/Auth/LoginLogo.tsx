"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { TbUserHexagon, TbUserOff } from "react-icons/tb";

export default function LoginLogo() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button
                    onClick={() => signOut()}
                    className="bg-secondary p-3 text-white "
                >
                    <TbUserHexagon />
                </button>
            </>
        );
    }
    return (
        <>
            <button
                className="bg-secondary p-3 text-white "
                onClick={() => signIn()}
            >
                <TbUserOff />
            </button>
        </>
    );
}
