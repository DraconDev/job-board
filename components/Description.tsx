"use client";
import { useAppState } from "@/state/state";

export default function Description() {
    const state = useAppState((state) => state);

    return (
        <div className="flex  p-1 bg-primary flex-col h-full">
            <div className="flex rounded p-2 shadow-md bg-secondary w-full gap-2 flex-col min-h-[400px]">
                <div className="text-xl rounded font-semibold">
                    {state?.activeJobPost?.title}
                </div>
                <div className="w-full h-[2px] bg-blue-600"></div>
                <div className="">{state?.activeJobPost?.description}</div>
            </div>
            <div className="flex gap-1">
                <button className="p-2 bg-accent hover:bg-blue-700 text-white font-bold  w-full ">
                    Save
                </button>

                <button className="p-2 bg-accent hover:bg-blue-700 text-white font-bold  w-full ">
                    Apply
                </button>
            </div>
        </div>
    );
}
