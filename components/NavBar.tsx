import { mdiAccount, mdiSearchWeb } from "@mdi/js";
import Icon from "@mdi/react";
import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="w-screen bg-slate-700  justify-center flex">
            <div className="flex max-w-3xl p-1 grow justify-between">
                <div className="flex p-1 ">
                    <LogoButton type="home" />
                </div>
                <div className="flex p-1">
                    <SearchBar placeholder="Job" logo="search" />
                    <SearchBar placeholder="Where" logo="pindrop" />
                </div>
                <div className="flex p-1 ">
                    {/* <LogoButton type="postjob" /> */}
                    <LogoButton type="work" />
                    <LogoButton type="notifications" />
                </div>
            </div>
        </div>
    );
}
