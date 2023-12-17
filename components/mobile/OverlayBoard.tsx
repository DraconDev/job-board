import { useClickOutside } from "@/lib/click";
import ListBoxes from "../Filter/ListBoxes";

type Props = {
    isOpen: boolean;
    toggleOverlayMenu: () => void;
};

const OverlayBoard = ({ isOpen, toggleOverlayMenu }: Props) => {
    const box = useClickOutside({ close: toggleOverlayMenu });
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-primary ${
                isOpen ? "w-full" : "w-0"
            } transition-width duration-50 flex justify-center`}
        >
            {isOpen && (
                <div className="flex justify-center mt-2 md:max-w-5xl w-full">
                    <div
                        className="flex  flex-col gap-1 mt-2 w-2/3 h-fit"
                        ref={box}
                    >
                        <ListBoxes />
                        <button
                            className="p-2 bg-secondary hover:bg-accent text-white font-bold rounded w-full"
                            onClick={toggleOverlayMenu}
                        >
                            Toggle Sidebar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverlayBoard;
