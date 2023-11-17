import { Listbox } from "@headlessui/react";
import { useState } from "react";

type listOptions = {
    list: { id: number; value: string }[];
    name?: string;
    onChange?: (value: string) => void;
};

const ListBoxCustom = ({ list }: listOptions) => {
    const [dropdownMenu, setDropdownMenu] = useState(list[0]);

    return (
        <div className="relative inline-block justify-center items-center rounded-3xl text-black w-60">
            <Listbox value={dropdownMenu} onChange={setDropdownMenu}>
                <div className="relative">
                    <Listbox.Button className="py-2 px-4 bg-white border rounded-md shadow-sm w-full flex justify-between items-center w-50 ">
                        <span>{dropdownMenu.value}</span>
                        <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Listbox.Button>
                    <Listbox.Options
                        className="dropdown-container"
                        style={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            marginTop: "10px",
                        }}
                    >
                        {list.map((field) => (
                            <Listbox.Option
                                key={field.id}
                                value={field}
                                className="py-2 px-4 hover:bg-gray-200 flex justify-between items-center"
                            >
                                <span>{field.value}</span>
                                {dropdownMenu.id === field.id && (
                                    <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
};

export default ListBoxCustom;
