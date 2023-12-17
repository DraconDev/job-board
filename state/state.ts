import { JobType, UserType } from "@/type/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type AppState = {
    role: string[];
    date: string[];
    jobType: string[];
    salary: string[];
    experience: string[];
    selectedOptions: Record<string, string>;
    setSelectedOptions: (key: string, value: string) => void;
    jobList: JobType[];
    jobSearchList: JobType[];
    setJobList: (jobList: JobType[]) => void;
    setJobSearchList: (jobSearchList: JobType[]) => void;
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
                jobSearchList: [],
                setJobSearchList: (jobSearchList: JobType[]) =>
                    set({ jobSearchList }),
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
                    jobType: "Any type",
                    experience: "1",
                },
                setSelectedOptions: (key: string, value: string) =>
                    set((state: AppState) => ({
                        selectedOptions: {
                            ...state.selectedOptions,
                            [key]: value,
                        },
                    })),
                role: [
                    "Any role",
                    "Internship",
                    "Entry level",
                    "Associate",
                    "Mid-Senior level",
                    "Director",
                    "Executive",
                ],
                date: ["Any time", "Past day", "Past week", "Past month"],
                jobType: ["Any location", "Remote", "Hybrid", "On-site"],
                salary: [
                    "Any salary",
                    "20,000+",
                    "30,000+",
                    "40,000+",
                    "50,000+",
                    "60,000+",
                    "70,000+",
                    "80,000+",
                    "90,000+",
                    "100,000+",
                ],
                experience: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                ],
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
