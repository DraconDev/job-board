import FetchJobsButton from "./FetchJobsButton";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="bg-secondary justify-center flex items-center">
            <div className="max-w-5xl p-1 gap-2 justify-between w-full flex items-center">
                <div className="flex gap-2 items-center">
                    <LogoButton type="home" />
                </div>
                <div className="flex gap-2 px-1 grow items-center">
                    <SearchBar placeholder="Job" logo="search" />
                    <FetchJobsButton />
                    <SearchBar placeholder="Where" logo="pindrop" />
                </div>
                <div className="flex gap-2 items-center ">
                    <LogoButton type="work" />
                    <LogoButton type="notifications" />
                    <LogoButton type="postjob" />
                </div>
            </div>
        </div>
    );
}
