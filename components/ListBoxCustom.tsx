import { Listbox } from "@headlessui/react";
import { useState } from "react";

type listOptions = {
    list: { id: number; value: string }[];
};

const ListBoxCustom = ({ list }: listOptions) => {
    const [dropdownMenu, setDropdownMenu] = useState(list[0]);

    return (
        <div className="relative inline-block p-1 justify-center items-center rounded-3xl text-black w-80">
            <Listbox value={dropdownMenu} onChange={setDropdownMenu}>
                <div className="flex place-content-center w-full">
                    <Listbox.Button className="py-2 px-4 bg-white border rounded-md shadow-sm w-full">
                        {dropdownMenu.value}
                    </Listbox.Button>
                </div>
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
                            className="py-2 px-4 hover:bg-gray-200 "
                        >
                            {field.value}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default ListBoxCustom;
