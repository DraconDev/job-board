"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserPlus } from "react-icons/fa";
import { TbUserHexagon } from "react-icons/tb";
export default function LoginLogo() {
    const { data: session } = useSession();
    return (
        <>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="bg-secondary hover:bg-accent text-white p-2 rounded-lg shadow-lg"
            >
                {session ? (
                    <TbUserHexagon className="h-7 w-7" />
                ) : (
                    <FaUserPlus className="h-7 w-7" />
                )}
            </button>
        </>
    );
}
