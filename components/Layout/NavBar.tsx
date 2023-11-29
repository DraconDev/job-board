import FetchJobsButton from "../FetchJobsButton";
import LogoButton from "../LogoButton";
import SearchBar from "../SearchBar";

export default function NavBar() {
    return (
        <div className="bg-secondary justify-center flex items-center">
            <div className="max-w-5xl p-1 gap-1 justify-between w-full flex items-center">
                <div className="flex gap-1 items-center">
                    <LogoButton type="home" />
                </div>
                <div className="flex gap-1 px-1 grow items-center">
                    <div className="w-full">
                        <SearchBar
                            placeholder="Job"
                            logo="search"
                        />
                    </div>
                    <div className="w-full hidden md:block">
                        <SearchBar
                            placeholder="Where"
                            logo="pindrop"
                        />
                    </div>
                    <div className="">
                        <FetchJobsButton />
                    </div>
                </div>
                <div className="flex gap-1 items-center ">
                    <div className="">
                        <LogoButton type="work" />
                    </div>
                    <div className="hidden md:block">
                        <LogoButton type="notifications" />
                    </div>
                    <div className="">
                        <LogoButton type="postjob" />
                    </div>
                </div>
            </div>
        </div>
    );
}
