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
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-white"
            >
                {text}
            </Link>
        );
    } else {
        return (
            <button
                onClick={action}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-white w-full text-left"
            >
                {text}
            </button>
        );
    }
};

export default DroplistMenuItem;
