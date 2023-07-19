import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="w-screen bg-slate-700  justify-center flex">
            <div className="flex max-w-5xl p-1 grow justify-between">
                <div className="flex p-1">
                    <LogoButton>home</LogoButton>
                </div>
                <div className="flex p-1">
                    <SearchBar />
                    <LogoButton>search</LogoButton>
                </div>
                <div className="flex p-1 ">
                    <LogoButton>work</LogoButton>
                    <LogoButton>notifications</LogoButton>
                </div>
            </div>
        </div>
    );
}
