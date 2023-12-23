"use client";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const Testing = (props: Props) => {
    const state = useAppState((state) => state);
    const session = useSession();

    const router = useRouter();

    // useEffect(() => {
    //     router.push(`/search/terminator`);
    // }, []);

    return (
        <div className="flex flex-col  w-full h-full    ">
            <div className="">Account</div>
            {JSON.stringify(session)}
            <Link href={`/search/terminator`}>Search jobs</Link>
            <Link href={`/search/${encodeURIComponent(state.searchTitle)}`}>
                Search jobs
            </Link>
        </div>
    );
};

export default Testing;
