"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LoginButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <button
                    onClick={() => signOut()}
                    className="bg-secondary p-3 text-white "
                >
                    Sign out
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
                Sign in
            </button>
        </>
    );
}
