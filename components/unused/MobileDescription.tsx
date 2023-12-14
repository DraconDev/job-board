"use client";
import { useAppState } from "@/state/state";
import CustomButton from "../CustomButton";

export default function MobileDescription({ toggleOverlayMenu }: any) {
    const state = useAppState((state) => state);

    return (
        <div className="flex   bg-primary flex-col   gap-1">
            <div className="flex rounded p-2 shadow-md bg-secondary w-full gap-2 flex-col h-full">
                <div className="text-xl rounded font-semibold">
                    {state?.activeJobPost?.title}
                </div>
                <div className="w-full h-[2px] bg-accent-accent"></div>
                <div className="p-1">{state?.activeJobPost?.description}</div>
            </div>
            <div className="flex gap-1">
                <CustomButton text="Save" />
                <CustomButton text="Apply" />
            </div>
        </div>
    );
}
