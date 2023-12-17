"use client";
import { useState } from "react";
import { BsSliders } from "react-icons/bs";
import OverlayBoard from "./OverlayBoard";

const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            <OverlayBoard
                isOpen={isOpen}
                toggleOverlayMenu={toggleOverlayMenu}
            />
        </div>
    );
};

export default OverlayMenu;
