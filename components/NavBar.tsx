import LogoButton from "./LogoButton";
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <div className="w-screen bg-slate-700  justify-center flex fixed">
            <div className="flex max-w-5xl p-1 grow justify-between">
                <div className="flex p-1  mx-2">
                    <LogoButton>home</LogoButton>
                </div>
                <div className="flex p-1  mx-2">
                    <SearchBar />

                </div>
                <div className="flex p-1 mx-2">
                    <LogoButton>work</LogoButton>
                    <LogoButton>notifications</LogoButton>
                </div>
            </div>
        </div>
    );
}
