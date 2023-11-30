"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LoginButton() {
    const { data: session } = useSession();
    return (
        <>
            <button
                onClick={() => (session ? signOut() : signIn())}
                className="bg-secondary hover:bg-accent text-white p-3 rounded-lg shadow-lg text-xl w-[110px]"
            >
                {session ? "Sign out" : "Sign in"}
            </button>
        </>
    );
}
