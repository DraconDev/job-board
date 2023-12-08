"use client";
import { useAppState } from "@/state/state";
import { Listbox } from "@headlessui/react";

type listOptions = {
    name: string;
    type: {
        id: number;
        value: string;
    }[];
};

const ListBoxCustom = ({ type, name }: listOptions) => {
    const state = useAppState((state) => state);
    // console.log(state);

    const setSelectedOptions = (key: string, value: string) => {
        state.setSelectedOptions(key, value);
        // console.log(state.selectedOptions);
    };

    return (
        <div className="relative inline-block justify-center items-center rounded-3xl text-black min-w-60 w-full">
            <Listbox
                value={state.selectedOptions[name]}
                // onChange={(value: string) => {
                //     setSelectedOptions(name, value);
                // }}
                onChange={(newValue) => {
                    console.log(newValue);
                    setSelectedOptions(name, newValue);
                }}
            >
                <div className="relative">
                    <Listbox.Button className="py-2 px-4 bg-white border rounded-md shadow-sm w-full flex justify-between items-center w-50 ">
                        <span>
                            {state.selectedOptions[name]
                                ? state.selectedOptions[name]
                                : "Missing"}
                        </span>
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
                    {/*  */}
                    <Listbox.Options
                        className="dropdown-container"
                        style={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            marginTop: "10px",
                        }}
                    >
                        {type.map((field) => (
                            <Listbox.Option
                                key={field.id}
                                value={field}
                                className="py-2 px-4 hover:bg-gray-200 flex justify-between items-center"
                                onClick={() =>
                                    setSelectedOptions(name, field.value)
                                }
                            >
                                <span>{field.value}</span>
                                {state.selectedOptions[name] ===
                                    field.value && (
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
