import { useEffect, useRef } from "react";

type Props = {
    close: () => void;
};
export const useClickOutside = ({ close }: Props) => {
    const boxref = useRef<HTMLDivElement | null>(null);
    const buttonref = useRef<HTMLButtonElement | null>(null);

    const handleMouseDown = (event: MouseEvent) => {
        if (!boxref.current) {
            console.log("no box");
            return;
        }
        if (!boxref.current.contains(event.target as Node)) {
            console.log("close");
            close();
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);
    });
    return { boxref, buttonref };
};
