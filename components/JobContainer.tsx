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

export default function JobContainer() {
    // const data = use(fetchData());
    return (
        <div className="flex flex-col w-full h-full">
            <Filter />
            <div className="flex">
                <JobList />
                <Description />
            </div>
            {/* <Button text="Search" action={() => getAvailableJobs("")}></Button> */}
        </div>
    );
}
