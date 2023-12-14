"use client";

interface Props {
    text: string;
    action?: () => void;
}

export default function CustomButton({ text, action }: Props) {
    return (
        <button
            className="p-2 bg-accent text-white font-bold  w-full hover:bg-primary hover:text-accent bg-border-2 border-2 border-accent rounded-sm"
            onClick={action}
        >
            {text}
        </button>
    );
}
