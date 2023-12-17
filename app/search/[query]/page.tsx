"use client";
import Filter from "@/components/Filter/Filter";
import JobPanel from "@/components/JobContainer/JobPanel";
import { useEffect, useState } from "react";

type Props = {};

const SearchPage = (props: Props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
    }, []);

    return active ? (
        <div className="flex flex-col w-full h-full ">
            {/* {isClient && <Filter />} */}
            <Filter />
            <JobPanel />
        </div>
    ) : (
        <></>
    );
};

export default SearchPage;
