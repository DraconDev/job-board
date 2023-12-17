"use client";
import Filter from "@/components/Filter/Filter";
import JobPanel from "@/components/JobContainer/JobPanel";
import { useAppState } from "@/state/state";
import { useEffect, useState } from "react";

type Props = {};

const SearchPage = (props: Props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(true);
    }, []);

    const state = useAppState((state) => state);

    return active ? (
        <div className="flex flex-col w-full h-full ">
            {/* {isClient && <Filter />} */}
            <Filter />
            <JobPanel jobs={state.jobSearchList} />
        </div>
    ) : (
        <></>
    );
};

export default SearchPage;
