import { JobType, UserType } from "@/type/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type AppState = {
    role: { id: number; value: string }[];
    date: { id: number; value: string }[];
    jobType: { id: number; value: string }[];
    salary: { id: number; value: string }[];
    selectedOptions: Record<string, string>;
    setSelectedOptions: (key: string, value: string) => void;
    jobList: JobType[];
    setJobList: (jobList: JobType[]) => void;
    activeJobPost?: JobType;
    updateActiveJobPost: (job: JobType) => void;
    searchTitle: string;
    searchLocation: string;
    setSearchTitle: (searchTitle: string) => void;
    setSearchLocation: (searchLocation: string) => void;
    user: UserType;
    updateUser: (user: UserType) => void;
    listOfAppliedJobs: JobType[];
    setListOfAppliedJobs: (listOfAppliedJobs: JobType[]) => void;
    experience: { id: number; value: string }[];
};

export const useAppState = create<AppState>()(
    devtools(
        persist(
            (set) => ({
                activeJobPost: undefined,
                updateActiveJobPost: (job: JobType) =>
                    set({ activeJobPost: job }),
                jobList: [],
                setJobList: (jobList: JobType[]) => set({ jobList }),
                searchTitle: "",
                setSearchTitle: (searchTitle: string) =>
                    set((state: AppState) => ({ searchTitle })),
                searchLocation: "",
                setSearchLocation: (searchLocation: string) =>
                    set((state: AppState) => ({ searchLocation })),

                selectedOptions: {
                    role: "Any role",
                    date: "Any time",
                    jobLocation: "Any location",
                    salary: "Any salary",
                },
                setSelectedOptions: (key: string, value: string) =>
                    set((state: AppState) => ({
                        selectedOptions: {
                            ...state.selectedOptions,
                            [key]: value,
                        },
                    })),
                role: [
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
                jobType: [
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
                experience: [
                    { id: 1, value: "1" },
                    { id: 2, value: "2" },
                    { id: 3, value: "3" },
                    { id: 4, value: "4" },
                    { id: 5, value: "5" },
                    { id: 6, value: "6" },
                    { id: 7, value: "7" },
                    { id: 8, value: "8" },
                    { id: 9, value: "9" },
                    { id: 10, value: "10+" },
                ]
                user: {},
                updateUser: (user: UserType) => set({ user }),
                listOfAppliedJobs: [],
                setListOfAppliedJobs: (jobs: JobType[]) =>
                    set({ listOfAppliedJobs: jobs }),
            }),

            {
                name: "appState",
            }
        )
    )
);
