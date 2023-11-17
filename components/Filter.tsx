"use client";

import { useState } from "react";
import ListBoxCustom from "./ListBoxCustom";
import OverlayMenu from "./OverlayMenu";

export const experience = [
    { id: 1, value: "Internship" },
    { id: 2, value: "Entry level" },
    { id: 3, value: "Associate" },
    { id: 4, value: "Mid-Senior level" },
    { id: 5, value: "Director" },
    { id: 6, value: "Executive" },
];
export const date = [
    { id: 1, value: "Past day" },
    { id: 2, value: "Past week" },
    { id: 3, value: "Past month" },
    { id: 4, value: "Any time" },
];

export const jobLocation = [
    { id: 1, value: "Remote" },
    { id: 2, value: "Hybrid" },
    { id: 3, value: "On-site" },
];

export const salary = [
    { id: 1, value: "20,000+" },
    { id: 2, value: "30,000+" },
    { id: 3, value: "40,000+" },
    { id: 4, value: "50,000+" },
    { id: 5, value: "60,000+" },
    { id: 6, value: "70,000+" },
    { id: 7, value: "80,000+" },
    { id: 8, value: "90,000+" },
    { id: 9, value: "100,000+" },
];

export default function Filter() {
    const [jobTitle, setJobTitle] = useState("");

    return (
        <div className="">
            <div className="p-1 bg-primary hidden md:block">
                <div className="w-full  h-12 flex gap-2 justify-center">
                    <ListBoxCustom list={date} />
                    <ListBoxCustom list={experience} />
                    <ListBoxCustom list={jobLocation} />
                    <ListBoxCustom list={salary} />
                </div>
            </div>
            <div className="p-1 bg-primary md:hidden sm:block">
                <OverlayMenu />
            </div>
        </div>
    );
}
