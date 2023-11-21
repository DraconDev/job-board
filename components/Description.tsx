"use client";

import { useAppState } from "@/state/state";

export default function Descpription() {
    const state = useAppState((state) => state);

    return (
        <div className="flex w-3/5 p-1 bg-primary">
            {state?.activeJobPost?.description}
        </div>
    );
}
