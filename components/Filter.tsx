"use client";
import { useState } from "react";
import ListBoxCustom from "./ListBoxCustom";

export default function Filter() {
    const [jobTitle, setJobTitle] = useState("");
    const experience = [
        { id: 1, value: "Internship" },
        { id: 2, value: "Entry level" },
        { id: 3, value: "Associate" },
        { id: 4, value: "Mid-Senior level" },
        { id: 5, value: "Director" },
        { id: 6, value: "Executive" },
    ];
    const date = [
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

    return (
        <div className="p-1 bg-primary ">
            <div className="w-full  h-12 flex gap-5 justify-center">
                <ListBoxCustom list={date} />
                <ListBoxCustom list={experience} />
                <ListBoxCustom list={jobLocation} />
                <ListBoxCustom list={salary} />
            </div>
        </div>
    );
}
