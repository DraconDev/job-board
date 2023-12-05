"use client";
import { useAppState } from "@/state/state";
import { useState } from "react";
import LoginLogo from "../Auth/LoginLogo";
import LogoButton from "../LogoButton";
import SearchBar from "../SearchBar";
import FetchJobsButton from "../search_jobs/FetchJobsButton";

export default function NavBar() {
    const state = useAppState((state) => state);

    const [filterTitle, setFilterTitle] = useState("");
    const [filterLocation, setFilterLocation] = useState("");

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
                            value={filterTitle}
                            set={(e) => {
                                setFilterTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="w-full hidden md:block">
                        <SearchBar
                            placeholder="Where"
                            logo="pindrop"
                            value={filterLocation}
                            set={(e) => {
                                setFilterLocation(e.target.value);
                            }}
                        />
                    </div>
                    <div className="">
                        <FetchJobsButton
                            filterTitle={filterTitle}
                            filterLocation={filterLocation}
                        />
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
