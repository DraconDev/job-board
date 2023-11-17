"use client";
import { useState } from "react";
import { date, experience, jobLocation, salary } from "./Filter";
import ListBoxCustom from "./ListBoxCustom";

const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlayMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-screen bg-gray-200 ${
                isOpen ? "w-full" : "w-0"
            } transition-width duration-50`}
        >
            {!isOpen && (
                <button className="p-4 w-full" onClick={toggleOverlayMenu}>
                    Toggle Filters
                </button>
            )}
            {isOpen && (
                <div className="flex justify-center mt-2">
                    <div className="flex  flex-col gap-1 mt-2 w-2/3">
                        <ListBoxCustom list={date} />
                        <ListBoxCustom list={experience} />
                        <ListBoxCustom list={jobLocation} />
                        <ListBoxCustom list={salary} />
                        <button
                            className="p-2 bg-secondary hover:bg-blue-700 text-white font-bold rounded w-full"
                            onClick={toggleOverlayMenu}
                        >
                            Toggle Sidebar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverlayMenu;
