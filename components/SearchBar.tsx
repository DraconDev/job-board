"use client";
export default function Search({
    placeholder,
    logo,
    value,
    set,
}: {
    placeholder: string;
    logo: string;
    value: string;
    set: (e: any) => void;
}) {
    return (
        <div className="flex items-center justify-center w-full h-full grow bg-primary rounded px-1 py-1">
            {/* <LogoButton type={`${logo}`} /> */}
            {/* {logo === "search" && <AiOutlineSearch size={27} />}
            {logo === "pindrop" && <RiPushpin2Line size={27} />} */}

            <input
                type="text"
                className=" flex grow bg-primary p-1
                outline-none rounded
                w-full
                "
                value={value}
                placeholder={`${placeholder}`}
                onChange={set}
            />
        </div>
    );
}
