"use client";
import FetchFilterButton from "@/components/unused/FetchFilterButton";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";

type Props = {};

const Testing = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    return (
        <div className="flex flex-col  w-full h-full    ">
            <div className="">Account</div>
            {JSON.stringify(session)}
            <FetchFilterButton />
        </div>
    );
};

export default Testing;
