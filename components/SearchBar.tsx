import LogoButton from "./LogoButton";

export default function Search(children: { placeholder: string }) {
    return (
        <div className="flex items-center justify-center w-full h-full grow bg-slate-800 rounded mx-1">
            <input
                type="text"
                className=" flex grow bg-slate-800 p-1
                outline-none
                w-full

                "
                placeholder={`${children.placeholder}`}
            />
            <LogoButton>search</LogoButton>
        </div>
    );
}
