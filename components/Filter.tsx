import React from "react";
import ListBoxCustom from "./ListBoxCustom";

export default function Filter() {
    const people = [
        { id: 1, value: "Durward Reynolds" },
        { id: 2, value: "Kenton Towne" },
        { id: 3, value: "Therese Wunsch" },
        { id: 4, value: "Benedict Kessler" },
        { id: 5, value: "Katelyn Rohan" },
    ];
    const whenPosted = [
        { id: 1, value: "Past 24 hours" },
        { id: 2, value: "Past week" },
        { id: 3, value: "Past month" },
        { id: 4, value: "Any time" },
    ];

    const jobLocation = [
        { id: 1, value: "Remote" },
        { id: 2, value: "Hybrid" },
        { id: 3, value: "On-site" },
    ];

    const salary = [
        { id: 1, value: "20000+" },
        { id: 2, value: "40000+" },
        { id: 3, value: "60000+" },
    ];

    return (
        <div className="p-1 bg-primary ">
            <div className="w-full  h-8 flex gap-1">
                <ListBoxCustom list={people} />
                <ListBoxCustom list={whenPosted} />
                <ListBoxCustom list={jobLocation} />
                <ListBoxCustom list={salary} />
            </div>
        </div>
    );
}
