import FetchJobsButton from "./FetchJobsButton";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="w-screen bg-slate-700  justify-center flex item ">
            <div className="flex max-w-3xl py-1 grow justify-between w-full items-center">
                <div className="flex  gap-1 items-center">
                    <LogoButton type="home" />
                </div>
                <div className="flex gap-1 px-1 grow items-center">
                    <SearchBar placeholder="Job" logo="search" />
                    <FetchJobsButton />
                    <SearchBar placeholder="Where" logo="pindrop" />
                </div>
                <div className="flex gap-1 items-center ">
                    <LogoButton type="work" />
                    <LogoButton type="notifications" />
                    <LogoButton type="postjob" />
                </div>
            </div>
        </div>
    );
}
