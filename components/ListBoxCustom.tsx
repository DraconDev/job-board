import { Listbox } from "@headlessui/react";
import React, { useState } from "react";

type listOptions = {
    list: { id: number; value: string }[];
};

const ListBoxCustom = ({ list }: listOptions) => {
    const [selectedPerson, setSelectedPerson] = useState(list[0]);
    return (
        <div className="relative inline-block p-1 bg-secondary  justify-center items-center rounded-3xl">
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <Listbox.Button>{selectedPerson.value}</Listbox.Button>
                <Listbox.Options className="bg-black">
                    {list.map((person) => (
                        <Listbox.Option key={person.id} value={person}>
                            {person.value}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default ListBoxCustom;
