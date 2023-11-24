"use client";
import { useAppState } from "@/state/state";
import CustomButton from "./Button";

export default function Description({ toggleOverlayMenu }: any) {
    const state = useAppState((state) => state);

    return (
        <div className="fixed top-0 left-0 h-full ">
            <div className="flex   bg-primary flex-col h-full p-2 py-5 gap-1">
                <div className="flex rounded p-2 shadow-md bg-secondary w-full gap-2 flex-col h-full">
                    <div className="text-xl rounded font-semibold">
                        {state?.activeJobPost?.title}
                    </div>
                    <div className="w-full h-[2px] bg-blue-600"></div>
                    <div className="p-1">
                        {state?.activeJobPost?.description}
                    </div>
                </div>
                <div className="flex gap-1">
                    <CustomButton text="Back" action={toggleOverlayMenu} />
                    <CustomButton text="Apply" />
                </div>
            </div>
        </div>
    );
}
