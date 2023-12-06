"use client";
import { fetchRecentJobs } from "@/db/mongo";
import { useAppState } from "@/state/state";
import { useEffect } from "react";
import LoginLogo from "../Auth/LoginLogo";
import LogoButton from "../LogoButton";
import SearchBar from "../SearchBar";
import FetchJobsButton from "../search_jobs/FetchJobsButton";

export default function NavBar() {
    const state = useAppState((state) => state);

    // const [filterTitle, setFilterTitle] = useState("");
    // const [filterLocation, setFilterLocation] = useState("");

    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            fetchRecentJobs();
        }
    };

    // Use effect hook to attach the event listener when the component mounts
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="bg-secondary justify-center flex items-center ">
            <div className="max-w-5xl p-1 gap-1 justify-between w-full flex items-center">
                <div className="flex gap-1 items-center">
                    <LogoButton type="home" />
                </div>
                <div className="flex gap-1 px-1 grow items-center">
                    <div className="w-full">
                        <SearchBar
                            placeholder="Job"
                            logo="search"
                            value={state.searchTitle}
                            set={(e) => {
                                state.setSearchTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full hidden md:block">
                        <SearchBar
                            placeholder="Where"
                            logo="pindrop"
                            value={state.searchLocation}
                            set={(e) => {
                                state.setSearchLocation(e.target.value);
                            }}
                        />
                    </div>
                    <div className="">
                        <FetchJobsButton />
                    </div>
                </div>
                <div className="flex gap-1 items-center ">
                    <div className="hidden md:block">
                        <LogoButton type="notifications" />
                    </div>
                    <div className="">
                        <LogoButton type="postjob" />
                    </div>
                </div>
                <LoginLogo />
            </div>
        </div>
    );
}
