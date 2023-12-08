"use client";

import { useAppState } from "@/state/state";
import { useState } from "react";

type ListBoxCustomProps = {
    type: string[];
    name: string;
};

const ListBoxCustom = ({ type, name }: ListBoxCustomProps) => {
    const state = useAppState((state) => state);
    const [dropdownState, setDropdownState] = useState(false);

    const setSelectedOptions = (value: string) => {
        state.setSelectedOptions(name, value);
    };

    return (
        <div className="relative inline-block w-full">
            <button
                value={state.selectedOptions[name]}
                onClick={() => {
                    setDropdownState(!dropdownState);
                    console.log(state.selectedOptions[name]);
                }}
                className="p-2 bg-white border rounded-md shadow-sm w-full focus:outline-none focus:ring focus:border-accent text-black"
            >
                {state.selectedOptions[name]}
            </button>
            {dropdownState && (
                <div className="p-2">
                    {type.map((field, index) => (
                        <div
                            key={index}
                            className={`p-2 ${
                                index % 2 === 0 ? "bg-gray-200" : "bg-white"
                            }  text-primary cursor-pointer hover:invert`}
                            onClick={() => {
                                setSelectedOptions(field);
                                setDropdownState(false);
                            }}
                        >
                            {field}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListBoxCustom;
