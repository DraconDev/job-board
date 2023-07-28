import LogoButton from "./LogoButton";

export default function Search() {
    return (
        <div className="flex items-center justify-center w-full h-full grow bg-slate-800 rounded">
            <input
                type="text"
                className=" flex grow bg-slate-800 p-1
                outline-none
                w-full

                "
                placeholder="Search..."
            />
            <LogoButton>search</LogoButton>
        </div>
    );
}
