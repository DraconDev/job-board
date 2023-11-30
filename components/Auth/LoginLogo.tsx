"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { TbUserHexagon } from "react-icons/tb"; // Make sure to import your icons.

export default function LoginLogo() {
    const { data: session } = useSession();
    const [dropdownStatus, setDropdownStatus] = useState(false);

    const toggleDropdown = () => setDropdownStatus(!dropdownStatus);

    return (
        <div className="relative inline-block text-left">
            {!session ? (
                <button
                    onClick={() => signIn()}
                    className="bg-secondary hover:bg-accent text-white p-2 rounded-lg shadow-lg"
                >
                    <TbUserHexagon className="h-7 w-7" />
                </button>
            ) : (
                <>
                    <button
                        onClick={toggleDropdown}
                        className="bg-secondary hover:bg-accent text-white p-2 rounded-lg shadow-lg"
                    >
                        <TbUserHexagon className="h-7 w-7" />
                    </button>

                    {dropdownStatus && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            {/* Dropdown menu items */}
                            <div className="py-1">
                                {/* Add menu items here */}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </a>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </a>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
