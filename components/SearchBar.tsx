import LogoButton from "./LogoButton";

export default function Search({
    placeholder,
    logo,
}: {
    placeholder: string;
    logo: string;
}) {
    return (
        <div className="flex items-center justify-center w-full h-full grow bg-slate-800 rounded">
            <LogoButton type={`${logo}`} />
            <input
                type="text"
                className=" flex grow bg-slate-800 p-1
                outline-none rounded
                w-full

                "
                placeholder={`${placeholder}`}
            />
        </div>
    );
}
