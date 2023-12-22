import { useEffect, useRef } from "react";

type Props = {
    close: () => void;
};
export const useClickOutside = ({ close }: Props) => {
    const box = useRef<HTMLDivElement | null>(null);
    const button = useRef<HTMLButtonElement | null>(null);

    const handleMouseDown = (event: MouseEvent) => {
        // Close the dropdown if the click is outside of it
        // if (
        //     button &&
        //     button.current &&
        //     !button.current.contains(event.target as Node)
        // ) {
        //     close();
        // } else
        if (!box.current) {
            return;
        }
        if (!box.current.contains(event.target as Node)) {
            close();
        }
        // if (!button.current && !box.current) {
        //     return;
        // } else if (
        //     button.current &&
        //     !button.current.contains(event.target as Node) &&
        //     !box?.current?.contains(event.target as Node)
        // ) {
        //     close();
        // }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener("mousedown", handleMouseDown);
    });
    return [box, button];
};
