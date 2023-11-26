import { Job } from "@/type/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type AppState = {
    experience: { id: number; value: string }[];
    date: { id: number; value: string }[];
    jobLocation: { id: number; value: string }[];
    salary: { id: number; value: string }[];
    selectedOptions: Record<string, string>;
    setSelectedOptions: (key: string, value: string) => void;
    jobList: Job[];
    setJobList: (jobList: Job[]) => void;
    activeJobPost?: Job;
    updateActiveJobPost: (job: Job) => void;
};
export const useAppState = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                activeJobPost: undefined,
                updateActiveJobPost: (job: Job) => set({ activeJobPost: job }),
                jobList: [],
                setJobList: (jobList: Job[]) => set({ jobList }),
                selectedOptions: {
                    experience: "Any role",
                    date: "Any time",
                    jobLocation: "Any location",
                    salary: "Any salary",
                },
                setSelectedOptions: (key, value) =>
                    set((state) => ({
                        selectedOptions: {
                            ...state.selectedOptions,
                            [key]: value,
                        },
                    })),
                experience: [
                    { id: 1, value: "Any role" },
                    { id: 2, value: "Internship" },
                    { id: 3, value: "Entry level" },
                    { id: 4, value: "Associate" },
                    { id: 5, value: "Mid-Senior level" },
                    { id: 6, value: "Director" },
                    { id: 7, value: "Executive" },
                ],
                date: [
                    { id: 1, value: "Any time" },
                    { id: 2, value: "Past day" },
                    { id: 3, value: "Past week" },
                    { id: 4, value: "Past month" },
                ],
                jobLocation: [
                    { id: 1, value: "Any location" },
                    { id: 2, value: "Remote" },
                    { id: 3, value: "Hybrid" },
                    { id: 4, value: "On-site" },
                ],
                salary: [
                    { id: 1, value: "Any salary" },
                    { id: 2, value: "20,000+" },
                    { id: 3, value: "30,000+" },
                    { id: 4, value: "40,000+" },
                    { id: 5, value: "50,000+" },
                    { id: 6, value: "60,000+" },
                    { id: 7, value: "70,000+" },
                    { id: 8, value: "80,000+" },
                    { id: 9, value: "90,000+" },
                    { id: 10, value: "100,000+" },
                ],
            }),
            {
                name: "appState",
            }
        )
    )
);
