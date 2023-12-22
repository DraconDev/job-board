"use client";

type Props = {
    searchOptions: string[];
    setSearchType: (type: "jobs" | "tasks") => void;
};

const SearchTypesDropdown = ({ searchOptions, setSearchType }: Props) => {
    return (
        <div className="w-20 absolute left-0 top-0 mt-10 bg-secondary  border-2 border-primary text-lg  ">
            {searchOptions.map((e, i) => (
                <button
                    className="hover:bg-accent p-2 text-center w-full"
                    key={i}
                    onClick={() => {
                        setSearchType(e as "jobs" | "tasks");
                        console.log("e");
                    }}
                >
                    {e[0].toUpperCase() + e.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default SearchTypesDropdown;
