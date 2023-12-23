"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { TbUserHexagon } from "react-icons/tb"; // Make sure to import your icons.
import DroplistMenuItem from "../Droplist/DroplistMenuItem";

export default function LoginLogo() {
    const { data: session } = useSession();
    const [dropdownStatus, setDropdownStatus] = useState(false);

    const toggleDropdown = () => setDropdownStatus(!dropdownStatus);

    const dropDownItems = [
        { name: "Profile", route: "/profile" },
        { name: "Logout", action: () => signOut() },
    ];

    return (
        <div className="relative inline-block text-left">
            {!session ? (
                <button
                    onClick={() => signIn()}
                    className="bg-secondary hover:bg-accent text-white p-2 rounded-lg shadow-lg"
                >
                    <TbUserHexagon className="h-9 w-9" />
                </button>
            ) : (
                <>
                    <button
                        onClick={toggleDropdown}
                        className="bg-secondary hover:bg-accent hover:text-white text-accent flex justify-center items-center rounded-lg "
                    >
                        {session?.user?.image ? (
                            <>
                                <Image
                                    src={session?.user?.image}
                                    alt={session?.user?.name ?? "User"}
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                                <div className=""></div>
                            </>
                        ) : (
                            <TbUserHexagon className="h-9 w-9" />
                        )}
                    </button>
                    {dropdownStatus && (
                        <div className=" absolute right-0 mt-2 w-56 rounded-md  bg-white z-10 border-[3px] border-primary">
                            {dropDownItems.map((item, index) => (
                                <DroplistMenuItem
                                    key={index}
                                    text={item.name}
                                    action={item.action}
                                    route={item.route}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
