"use client";

type Props = {
    list: string[];
    set: (e: string) => void;
    close: () => void;
};

const DropdownMenu = ({ list, set, close }: Props) => {
    return (
        <div className="w-20 absolute left-0 top-0 mt-10 bg-secondary  border-2 border-primary text-lg  ">
            {list.map((e, i) => (
                <button
                    className="hover:bg-accent p-2 text-center w-full"
                    key={i}
                    onClick={() => {
                        set(e);
                        close();
                    }}
                >
                    {e[0].toUpperCase() + e.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default DropdownMenu;
