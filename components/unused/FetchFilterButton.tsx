"use client";
import { useAppState } from "@/state/state";
import { useRouter } from "next/navigation";

type Props = {};

const FetchFilterButton = (props: Props) => {
    const state = useAppState((state) => state);
    const router = useRouter();

    const queryParams = new URLSearchParams({
        title: "market",
    });
    // * GET joblist from server joblist route
    const handleSearch = async () => {
        // const jobs = await fetch(`/api/filterjobs`);
        const jobs = await fetch(`/api/filterjobs?${queryParams.toString()}`);
        const data = await jobs.json();
        state.setJobList([...data]);
        state.activeJobPost = data[0];
        router.push("/");
    };

    return (
        <div>
            <button
                //  href="/"
                onClick={handleSearch}
                className="p-2  bg-primary  text-white font-bold rounded w-full border border-accent hover:bg-accent-700 h-full"
            >
                FilterSearch
            </button>
        </div>
    );
};

export default FetchFilterButton;
