import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="w-screen bg-slate-700  justify-center flex">
            <div className="flex max-w-3xl py-1 grow justify-between w-full">
                <div className="flex p-1 ">
                    <LogoButton type="home" />
                </div>
                <div className="flex p-1">
                    <SearchBar placeholder="Job" logo="search" />
                    <SearchBar placeholder="Where" logo="pindrop" />
                </div>
                <div className="flex p-1 ">
                    <LogoButton type="work" />
                    <LogoButton type="notifications" />
                    <LogoButton type="postjob" />
                </div>
            </div>
        </div>
    );
}
