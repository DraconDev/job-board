import { Job } from "@/type/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AppState = {
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
                    experience: "Internship",
                    date: "Past day",
                    jobLocation: "Remote",
                    salary: "20,000+",
                },
                setSelectedOptions: (key, value) =>
                    set((state) => ({
                        selectedOptions: {
                            ...state.selectedOptions,
                            [key]: value,
                        },
                    })),
                experience: [
                    { id: 1, value: "Internship" },
                    { id: 2, value: "Entry level" },
                    { id: 3, value: "Associate" },
                    { id: 4, value: "Mid-Senior level" },
                    { id: 5, value: "Director" },
                    { id: 6, value: "Executive" },
                ],
                date: [
                    { id: 1, value: "Past day" },
                    { id: 2, value: "Past week" },
                    { id: 3, value: "Past month" },
                    { id: 4, value: "Any time" },
                ],
                jobLocation: [
                    { id: 1, value: "Remote" },
                    { id: 2, value: "Hybrid" },
                    { id: 3, value: "On-site" },
                ],
                salary: [
                    { id: 1, value: "20,000+" },
                    { id: 2, value: "30,000+" },
                    { id: 3, value: "40,000+" },
                    { id: 4, value: "50,000+" },
                    { id: 5, value: "60,000+" },
                    { id: 6, value: "70,000+" },
                    { id: 7, value: "80,000+" },
                    { id: 8, value: "90,000+" },
                    { id: 9, value: "100,000+" },
                ],
            }),
            {
                name: "appState",
            }
        )
    )
);
