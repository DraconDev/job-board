"use client";
import { default as Link } from "next/link";

type Props = {
    list: string[];
    set?: (e: string) => void;
    close?: () => void;
    
};

const DropdownMenu = ({ list, set, close }: Props) => {
    return (
        <div className="w-20 absolute left-0 top-0 mt-[44px] bg-secondary border-2 border-primary text-lg flex flex-col">
            {list.map((e, i) =>
                set ? (
                    <button
                        className="hover:bg-accent p-2 text-center w-full"
                        key={i}
                        onClick={() => {
                            set(e);
                            if (close) close();
                        }}
                    >
                        {e[0].toUpperCase() + e.slice(1)}
                    </button>
                ) : (
                    <Link
                        href={"/" + "post" + e}
                        key={i}
                        className="hover:bg-accent p-2 text-center w-full"
                    >
                        {e[0].toUpperCase() + e.slice(1)}
                    </Link>
                )
            )}
        </div>
    );
};

export default DropdownMenu;
