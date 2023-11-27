"use client";

interface Props {
    text: string;
    action?: () => void;
}

export default function CustomButton({ text, action }: Props) {
    return (
        <button
            className="p-2 bg-accent hover:bg-blue-700 text-white font-bold  w-full"
            onClick={action}
        >
            {text}
        </button>
    );
}
