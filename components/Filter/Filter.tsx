"use client";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import OverlayBoard from "../mobile/OverlayBoard";
import OverlayMenu from "../mobile/OverlayMenu";
import ListBoxes from "./ListBoxes";

export default function Filter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlayMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <div className="p-1 bg-primary hidden md:block">
                <div className="w-full  h-12 flex gap-2 justify-center items-center">
                    <ListBoxes />
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <FaAnglesRight className="w-[32px] h-[32px] text-accent" />
                    </button>
                    <OverlayBoard
                        isOpen={isOpen}
                        toggleOverlayMenu={toggleOverlayMenu}
                    />
                </div>
            </div>
            <div className="p-1 bg-primary md:hidden sm:block">
                <OverlayMenu />
            </div>
        </div>
    );
}
