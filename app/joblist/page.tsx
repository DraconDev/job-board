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
        <div className="flex flex-col  justify-center content-center min-h-screen py-2 w-full">
            <Filter />
            <div className="">
                <JobList />
                <Description />
            </div>
            {/* <Button text="Search" action={() => getAvailableJobs("")}></Button> */}
        </div>
    );
}
