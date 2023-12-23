import React, { useState } from "react";
import DropdownList from "./DropdownList";

type Props = {
    set?: (e: string) => void;
    list: string[];
    children?: React.ReactNode;
};

const Dropmenu = ({ list, set, children }: Props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex  relative border-2 border-accent rounded-md ">
            <button
                className="p-1 w-10 h-10  bg-primary text-accent text-lg flex items-center justify-center  "
                onClick={() => setToggle(!toggle)}
            >
                {children && children}
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
