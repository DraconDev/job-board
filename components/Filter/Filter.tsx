import OverlayMenu from "../mobile/OverlayMenu";
import ListBoxes from "./ListBoxes";

export default function Filter() {
    return (
        <div>
            <div className="p-1 bg-primary hidden md:block">
                <div className="w-full  h-12 flex gap-2 justify-center items-center">
                    <ListBoxes />
                </div>
            </div>
            <div className="p-1 bg-primary md:hidden sm:block">
                <OverlayMenu />
            </div>
        </div>
    );
}
