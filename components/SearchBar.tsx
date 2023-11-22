import { AiOutlineSearch } from "react-icons/ai";
import { RiPushpin2Line } from "react-icons/ri";

export default function Search({
    placeholder,
    logo,
}: {
    placeholder: string;
    logo: string;
}) {
    return (
        <div className="flex items-center justify-center w-full h-full grow bg-primary rounded px-2 py-1">
            {/* <LogoButton type={`${logo}`} /> */}
            {logo === "search" && <AiOutlineSearch size={27} />}
            {logo === "pindrop" && <RiPushpin2Line size={27} />}
            <input
                type="text"
                className=" flex grow bg-primary p-1
                outline-none rounded
                w-full

                "
                placeholder={`${placeholder}`}
            />
        </div>
    );
}
