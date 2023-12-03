"use client";
import { useState } from "react";
import CVAdding from "./CVAdding";
import CVEducation from "./CVEducation";
import CVPersonal from "./CVPersonal";
import CVSkills from "./CVSkills";

export default function BuildCV() {
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

    const handleWorkExperienceChange = (index: any, e: any) => {
        const updatedWorkExperiences = workExperiences.map(
            (experience, expIndex) => {
                if (index === expIndex) {
                    return { ...experience, [e.target.name]: e.target.value };
                }
                return experience;
            }
        );
        setWorkExperiences(updatedWorkExperiences);
    };

    const handleSkillChange = (index: any, e: any) => {
        const updatedSkills = skills.map((skill, skillIndex) => {
            if (index === skillIndex) {
                return e.target.value;
            }
            return skill;
        });
        setSkills(updatedSkills);
    };

    return (
        <div className="max-w-md flex flex-col p-4 text-black  ">
            <h1 className="text-white text-3xl font-bold text-center mb-6">
                Build Your CV
            </h1>
            <form className="flex flex-col">
                <CVPersonal />
                <CVEducation />
                <CVAdding
                    title="Work Experience"
                    items={workExperiences}
                    handleChange={handleWorkExperienceChange}
                    addItem={addWorkExperience}
                />
                <CVSkills
                    title="Skills"
                    items={skills}
                    handleChange={handleSkillChange}
                    addItem={addSkill}
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
