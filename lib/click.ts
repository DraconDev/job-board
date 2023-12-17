import { useEffect, useRef } from "react";

type Props = {
    close: () => void;
};
export const useClickOutside = ({ close }: Props) => {
    const box = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it
        if (box.current && !box.current.contains(event.target as Node)) {
            close();
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);
    });
    return box;
};
