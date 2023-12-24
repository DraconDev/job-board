"use client";
import { useAppState } from "@/state/state";
import { FaArrowsRotate } from "react-icons/fa6";

import { useSearchJobs } from "@/utils/filterjob";
import { useCallback, useEffect, useState } from "react";
import Dropmenu from "../UI/Dropdown/Dropmenu";
import LogoContainer from "../UIcustom/LogoContainer/LogoContainer";
import FetchJobsButton from "./FetchJobsButton";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    const searchOptions = ["jobs", "tasks"];
    const state = useAppState((state) => state);
    const searchJobs = useSearchJobs();
    const [searchType, setSearchType] = useState("jobs");

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

    return (
        <div className="bg-secondary justify-center flex items-center fixed left-0 top-0 w-full z-10 h-[48px]">
            <div className="max-w-5xl p-1 gap-1 justify-between w-full flex items-center">
                <LogoButton
                    type="home"
                    route="/"
                />
                <div className="flex gap-1 px-1 grow items-center ">
                    <Dropmenu
                        list={searchOptions}
                        set={setSearchType}
                    >
                        <FaArrowsRotate className={`w-7 h-7 text-white `} />
                    </Dropmenu>
                    <div className="w-full ">
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
                    <FetchJobsButton type={searchType} />
                </div>
                <LogoContainer />
            </div>
        </div>
    );
}
