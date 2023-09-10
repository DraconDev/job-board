import { Listbox } from "@headlessui/react";
import React, { useState } from "react";

type Props = {};

const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
];

const ListBoxCustom = (props: Props) => {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    return (
        <div className="relative inline-block p-1 bg-black  justify-center items-center">
            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                <Listbox.Options className="bg-black">
                    {people.map((person) => (
                        <Listbox.Option
                            key={person.id}
                            value={person}
                            disabled={person.unavailable}
                        >
                            {person.name}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default ListBoxCustom;
