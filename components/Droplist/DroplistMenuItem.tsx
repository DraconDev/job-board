"use client";
import Link from "next/link";

type Props = {
    text: string;
    action?: () => void;
    route?: string;
};

const DroplistMenuItem = ({ text, action, route }: Props) => {
    if (route) {
        return (
            <Link
                href={route}
                className="block px-4 py-2 text-sm hover:bg-secondary hover:invert  bg-secondary text-white border-primary  z-10"
            >
                {text}
            </Link>
        );
    } else {
        return (
            <button
                onClick={action}
                className="block px-4 py-2 text-sm hover:bg-secondary hover:invert w-full text-left bg-secondary text-white border-primary z-10"
            >
                {text}
            </button>
        );
    }
};

export default DroplistMenuItem;
