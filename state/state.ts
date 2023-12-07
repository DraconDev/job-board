import { JobType, UserType } from "@/type/types";
import zukeeper from "zukeeper";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AppState = {
    experience: { id: number; value: string }[];
    date: { id: number; value: string }[];
    jobLocation: { id: number; value: string }[];
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
    listOfAppliedJobs: string[];
    setListOfAppliedJobs: (listOfAppliedJobs: string[]) => void;
};

export const useAppState = create<AppState>()(
    zukeeper(
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
                    experience: "Any role",
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
                user: {},
                updateUser: (user: UserType) => set({ user }),
                listOfAppliedJobs: [],
                setListOfAppliedJobs: (jobs: JobType) =>
                    set((state: AppState) => ({ listOfAppliedJobs: jobs })),
            }),

            {
                name: "appState",
            }
        )
    )
);
