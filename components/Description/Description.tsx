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
                _id: state?.activeSearchJobPost?._id,
                email: session.data?.user?.email,
            }),
        });
    }

    return (
        state.activeSearchJobPost && (
            <div className="flex bg-primary flex-col gap-1 overflow-hidden rounded  transition-transform  ">
                <div className="flex rounded p-3 shadow-md bg-secondary w-full  flex-col min-h-[400px]  max-h-[83.5vh] overflow-y-auto ">
                    <h2 className="text-xl rounded font-semibold">
                        {state?.activeSearchJobPost?.title}
                    </h2>
                    <div className="w-full h-[2px] bg-accent"></div>
                    <div className="gap-3">
                        <div className="text-gl flex gap-2 items-center ">
                            <div className="div p-1">
                                ${state.activeSearchJobPost?.salaryMin}-
                                {state.activeSearchJobPost?.salaryMax}
                            </div>

                            <div className=" bg-accent px-2 rounded-sm">
                                {state.activeSearchJobPost?.jobType}
                            </div>
                            <div className="bg-accent px-2 rounded-sm">
                                {state.activeSearchJobPost?.role}
                            </div>
                        </div>
                        {/* <div className="">
                            {state?.activeSearchJobPost?.description}
                        </div> */}
                        <ShowHtml
                            userText={
                                state?.activeSearchJobPost?.description
                                    ? state?.activeSearchJobPost?.description
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
