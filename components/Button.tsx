"use client";
import { text } from "stream/consumers";

interface Props {
    text: string;
    action?: () => void;
}

export default function Button({ text, action }: Props) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={action}
        >
            {text}
        </button>
    );
}
