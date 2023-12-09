"use client";
import { useAppState } from "@/state/state";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CVEducation from "./CVEducation";
import CVPersonal from "./CVPersonal";
import CVSkills from "./CVSkills";
import CVAdding from "./CVWork";

export default function BuildCV() {
    const state = useAppState((state) => state);
    const { register, handleSubmit } = useForm();
    const session = useSession();

    const [submitting, setSubmitting] = useState(false);
    const onSubmit: SubmitHandler<any> = async (data) => {
        if (!session || session.data?.user?.email === undefined) {
            return;
        }
        if (submitting) {
            return;
        }
        // console.log(data);
        setSubmitting(true);
        try {
            const response = await fetch("/api/updateuserprofile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // send the data in UserType format
                body: JSON.stringify({
                    email: session.data.user.email,
                    profile: {
                        fullName: data.fullName,
                        education: [
                            {
                                degree: data.degree,
                                institution: data.institution,
                                endDate: data.endDate,
                            },
                        ],
                        skills: [...data.skills],
                        workExperiences: [...data.work],
                    },
                }),
                // body: JSON.stringify({
                //     ...data,
                //     email: session.data.user.email,
                // }),
            });
        } catch (error) {
            console.error("Error:", error);
        }

        setSubmitting(false);
    };

    const [workExperiences, setWorkExperiences] = useState([
        { position: "", company: "", description: "", date: "" },
    ]);

    const [skills, setSkills] = useState([""]);

    const addWorkExperience = () => {
        setWorkExperiences([
            ...workExperiences,
            { position: "", company: "", description: "", date: "" },
        ]);
    };
    const addSkill = () => {
        setSkills([...skills, ""]);
    };

    return (
        <div className="max-w-md flex flex-col p-4 text-black  ">
            <h1 className="text-white text-3xl font-bold text-center mb-6">
                Build Your CV
            </h1>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <CVPersonal register={register} />
                <CVEducation register={register} />
                <CVAdding
                    title="Work Experience"
                    workExperiences={workExperiences}
                    addItem={addWorkExperience}
                    register={register}
                />
                <CVSkills
                    title="Skills"
                    skills={skills}
                    addItem={addSkill}
                    register={register}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-black p-3 rounded hover:bg-blue-600 transition duration-200 text-white"
                >
                    Submit CV
                </button>
            </form>
        </div>
    );
}
