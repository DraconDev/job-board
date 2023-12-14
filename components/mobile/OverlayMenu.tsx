"use client";
import { useAppState } from "@/state/state";
import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import ListBoxes from "../Filter/ListBoxes";

const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const state = useAppState((state) => state);

    const toggleOverlayMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            {!isOpen && (
                <button
                    className="p-2 bg-secondary  text-white font-bold rounded w-full flex justify-center items-center gap-1 text-1xl border-2 border-accent "
                    onClick={toggleOverlayMenu}
                >
                    <BsSliders /> <p className="">Filters</p>
                </button>
            )}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-200 ${
                    isOpen ? "w-full" : "w-0"
                } transition-width duration-50`}
            >
                {isOpen && (
                    <div className="flex justify-center mt-2">
                        <div className="flex  flex-col gap-1 mt-2 w-2/3">
                            <ListBoxes />
                            <button
                                className="p-2 bg-secondary hover:bg-accent-700 text-white font-bold rounded w-full"
                                onClick={toggleOverlayMenu}
                            >
                                Toggle Sidebar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OverlayMenu;
