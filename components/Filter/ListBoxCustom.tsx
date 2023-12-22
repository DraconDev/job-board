"use client";
import { FaAngleDoubleDown } from "react-icons/fa";

import { useAppState } from "@/state/state";
import { useEffect, useRef, useState } from "react";

type ListBoxCustomProps = {
    type: string[];
    name: string;
    flavor?: string;
};

const ListBoxCustom = ({ type, name, flavor }: ListBoxCustomProps) => {
    const state = useAppState((state) => state);
    const [dropdownState, setDropdownState] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const setSelectedOptions = (value: string) => {
        state.setSelectedOptions(name, value);
    };

    const toggleDropdown = () => {
        setDropdownState(!dropdownState);
    };

    const handleMouseDown = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setDropdownState(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div
            className="relative block w-full "
            ref={dropdownRef}
        >
            <button
                value={state.selectedOptions[name]}
                onClick={toggleDropdown}
                className="p-2 bg-secondary text-white border rounded-md shadow-sm w-full focus:outline-none focus:ring focus:border-accent border-primary flex justify-center items-center"
                style={{ zIndex: 0 }}
            >
                <div className="flex grow justify-center">
                    {state.selectedOptions[name]}
                    {flavor && ` ${flavor}`}
                </div>
                <FaAngleDoubleDown className="h-5 w-5 text-accent" />
            </button>
            {dropdownState && (
                <div className=" absolute bg-primary border-2 border-primary rounded-lg shadow-sm w-full mt-2 z-10 ">
                    {type.map((field, index) => (
                        <div
                            key={index}
                            className={`p-2 ${
                                index % 2 === 0
                                    ? "brightness-100"
                                    : "brightness-[85%]"
                            } cursor-pointer hover:bg-accent  w-full bg-secondary text-white border-primary `}
                            onClick={() => {
                                setSelectedOptions(field);
                                setDropdownState(false);
                            }}
                        >
                            {field}
                            {flavor && ` ${flavor}`}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListBoxCustom;
