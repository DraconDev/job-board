"use client";
import { useAppState } from "@/state/state";

import { searchJobs } from "@/app/api/job/find/filter/route";
import { useCallback, useEffect } from "react";
import LoginLogo from "../Auth/LoginLogo";
import FetchJobsButton from "./FetchJobsButton";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    const state = useAppState((state) => state);

    const handleKeyDown = useCallback(
        (event: any) => {
            if (event.key === "Enter") {
                searchJobs(state);
            }
        },
        [state]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

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
