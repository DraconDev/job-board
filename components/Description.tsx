"use client";
import { useAppState } from "@/state/state";
import CustomButton from "./CustomButton";

export default function Description() {
    const state = useAppState((state) => state);

    return (
        state.activeJobPost && (
            <div className="flex bg-primary flex-col gap-1 overflow-hidden rounded hover:scale-[1.01] duration-150 transition-transform ">
                <div className="flex rounded p-2 shadow-md bg-secondary w-full  flex-col min-h-[400px] ">
                    <h2 className="text-xl rounded font-semibold">
                        {state?.activeJobPost?.title}
                    </h2>
                    <div className="w-full h-[2px] bg-blue-600"></div>
                    <div className="">{state?.activeJobPost?.description}</div>
                </div>

                <div className="flex gap-1">
                    <CustomButton text="Save" />
                    <CustomButton text="Apply" />
                </div>
            </div>
        )
    );
}
