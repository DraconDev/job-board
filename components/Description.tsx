"use client";
import { useAppState } from "@/state/state";
import { FaMoneyBill } from "react-icons/fa";

export default function Description() {
    const state = useAppState((state) => state);

    return (
        <div className="flex  p-1 bg-primary">
            <div className="flex rounded p-2 shadow-md bg-secondary w-full gap-2 flex-col">
                <div className="text-xl rounded ">
                    {state?.activeJobPost?.title}
                </div>


                <div className="">{state?.activeJobPost?.description}</div>
            </div>
        </div>
    );
}
