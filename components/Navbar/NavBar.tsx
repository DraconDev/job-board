"use client";
import { useAppState } from "@/state/state";

import { useClickOutside } from "@/lib/click";
import { useSearchJobs } from "@/utils/filterjob";
import { LegacyRef, useCallback, useEffect, useState } from "react";
import { GiCycle } from "react-icons/gi";
import LoginLogo from "../Auth/LoginLogo";
import FetchJobsButton from "./FetchJobsButton";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";
import SearchTypesDropdown from "./SearchTypesDropdown";

export default function NavBar() {
    const searchOptions = ["jobs", "tasks"];
    const state = useAppState((state) => state);
    const searchJobs = useSearchJobs();
    const [searchType, setSearchType] = useState<"jobs" | "tasks">("jobs");

    const handleKeyDown = useCallback(
        (event: any) => {
            if (event.key === "Enter") {
                searchJobs();
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

    const [searchTypeSelecting, setSearchTypeSelecting] = useState(false);

    const [boxref, buttonref] = useClickOutside({
        close: () => setSearchTypeSelecting(false),
    });

    return (
        <div className="bg-secondary justify-center flex items-center fixed left-0 top-0 w-full z-10">
            <div className="max-w-5xl p-1 gap-1 justify-between w-full flex items-center">
                <div className="flex gap-1 items-center">
                    <LogoButton type="home" />
                </div>
                <div className="flex gap-1 px-1 grow items-center ">
                    <div className="w-full flex  relative">
                        <button
                            className="p-1 w-10 h-10  bg-primary text-accent text-lg flex items-center justify-center  "
                            onClick={() =>
                                setSearchTypeSelecting(!searchTypeSelecting)
                            }
                            ref={buttonref as LegacyRef<HTMLButtonElement>}
                        >
                            <GiCycle className="w-7 h-7" />
                        </button>
                        {searchTypeSelecting && (
                            <SearchTypesDropdown
                                searchOptions={searchOptions}
                                setSearchType={setSearchType}
                                ref={boxref}
                            />
                        )}

                        <SearchBar
                            placeholder={
                                searchType[0].toUpperCase() +
                                searchType.slice(1)
                            }
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
