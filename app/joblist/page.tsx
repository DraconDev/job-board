import Button from "@/components/Button";
import Description from "@/components/Description";
import Filter from "@/components/Filter";
import JobList from "@/components/JobList";

import { use } from "react";

async function fetchData() {
    const res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    return res.json();
}

export default function Page() {
    // const data = use(fetchData());
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Filter />
            <div className="">
                <Description />
                <JobList />
            </div>
            {/* <div>{data[0].word}</div> */}
            {/* <Button text="hello"></Button> */}
        </div>
    );
}
