"use client";
import { useAppState } from "@/state/state";

type Props = {};

const Testing = (props: Props) => {
    const state = useAppState((state) => state);

    return (
        <div className="flex flex-col  w-full h-full    ">
            {/* <LoginLogo /> */}
            {/* <NoJobs /> */}

            {/* <button
                className="p-4 bg-primary hover:bg-blue-700 text-white font-bold rounded w-full"
                // onClick={() => state.setSelectedOptions("name", "field.value")}
                onClick={() => console.log(state.selectedOptions)}
            >
                Test state options
            </button>
            <button
                className="p-4 bg-primary hover:bg-blue-700 text-white font-bold rounded w-full"
                // onClick={() => state.setSelectedOptions("name", "field.value")}
                onClick={() =>
                    state.setSelectedOptions("experience", "Director")
                }
            >
                Test state options 2
            </button>
            <FetchJobsButton /> */}
        </div>
    );
};

export default Testing;
