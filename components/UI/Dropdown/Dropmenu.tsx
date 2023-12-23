"use client";
import React, { useRef, useState } from "react";
import DropdownList from "./DropdownList";

type Props = {
    set?: (e: string) => void;
    list: string[];
    children?: React.ReactNode;
};

const Dropmenu = ({ list, set, children }: Props) => {
    const [toggle, setToggle] = useState(false);
    const closeTimeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        // Clear any existing timeouts to prevent the dropdown from closing
        if (closeTimeoutId.current) {
            clearTimeout(closeTimeoutId.current);
            closeTimeoutId.current = null;
        }
        setToggle(true);
    };

    const handleMouseLeave = () => {
        // Set a timeout to close the dropdown after a delay
        closeTimeoutId.current = setTimeout(() => {
            setToggle(false);
        }, 50); // Delay in milliseconds, adjust as needed
    };

    return (
        <div
            className="flex relative border-accent rounded-md text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="p-1 w-10 h-10 text-accent text-lg flex items-center justify-center hover:bg-accent rounded-md"
                onClick={() => setToggle(!toggle)}
            >
                {children}
            </button>
            {toggle && (
                <DropdownList
                    list={list}
                    set={set}
                    close={() => setToggle(false)}
                />
            )}
        </div>
    );
};

export default Dropmenu;
