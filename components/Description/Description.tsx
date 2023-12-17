"use client";
import { useAppState } from "@/state/state";

import { useSession } from "next-auth/react";
import CustomButton from "../Layout/CustomButton";
import { ShowHtml } from "../Quill/ShowHtml";

export default function Description() {
    const state = useAppState((state) => state);
    const session = useSession();

    function handleApply() {
        fetch("/api/job/apply", {
            method: "POST", // or another HTTP method
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                _id: state?.activeJobPost?._id,
                email: session.data?.user?.email,
            }),
        });
    }

    return (
        state.activeJobPost && (
            <div className="flex bg-primary flex-col gap-1 overflow-hidden rounded  transition-transform hover:transform hover:scale-[1.005] duration-150 ">
                <div className="flex rounded p-3 shadow-md bg-secondary w-full  flex-col min-h-[400px]  ">
                    <h2 className="text-xl rounded font-semibold">
                        {state?.activeJobPost?.title}
                    </h2>
                    <div className="w-full h-[2px] bg-accent"></div>
                    <div className="gap-3">
                        <div className="text-gl flex gap-2 items-center ">
                            <div className="div p-1">
                                ${state.activeJobPost?.salaryMin}-
                                {state.activeJobPost?.salaryMax}
                            </div>

                            <div className=" bg-accent px-2 rounded-sm">
                                {state.activeJobPost?.jobType}
                            </div>
                            <div className="bg-accent px-2 rounded-sm">
                                {state.activeJobPost?.role}
                            </div>
                        </div>
                        {/* <div className="">
                            {state?.activeJobPost?.description}
                        </div> */}
                        <ShowHtml
                            userText={
                                state?.activeJobPost?.description
                                    ? state?.activeJobPost?.description
                                    : ""
                            }
                        />
                    </div>
                </div>

                <div className="flex gap-1">
                    <CustomButton text="Save" />
                    <CustomButton
                        text="Apply"
                        action={handleApply}
                    />
                </div>
            </div>
        )
    );
}
