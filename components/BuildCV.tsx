"use client";
import { useState } from "react";

export default function BuildCV() {
    const [workExperiences, setWorkExperiences] = useState([
        { position: "", company: "", description: "" },
    ]);
    const [skills, setSkills] = useState([""]);
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

    const addWorkExperience = () => {
        setWorkExperiences([
            ...workExperiences,
            { position: "", company: "", description: "" },
        ]);
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
        <div className="max-w-md  p-4 text-black  ">
            <h1 className="text-white text-3xl font-bold text-center mb-6">
                Build Your CV
            </h1>
            <form>
                {/* Personal Information Section */}
                <section className="mb-6">
                    <h2 className="text-white text-xl font-semibold mb-4">
                        Personal Information
                    </h2>
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="tel"
                        placeholder="Phone Number"
                    />
                </section>

                {/* Education Section */}
                <section className="mb-6">
                    <h2 className="text-white text-xl font-semibold mb-4">
                        Education
                    </h2>
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Degree"
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Institution"
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Year of Graduation"
                    />
                </section>

                {/* Work Experience Section */}
                <section className="mb-6">
                    <h2 className="text-white text-xl font-semibold mb-4">
                        Work Experience
                    </h2>
                    {workExperiences.map((experience, index) => (
                        <div
                            key={index}
                            className="mb-4"
                        >
                            <input
                                className="w-full p-2 mb-4 border rounded"
                                type="text"
                                placeholder="Position"
                                name="position"
                                value={experience.position}
                                onChange={(e) =>
                                    handleWorkExperienceChange(index, e)
                                }
                                required
                            />
                            <input
                                className="w-full p-2 mb-4 border rounded"
                                type="text"
                                placeholder="Company"
                                name="company"
                                value={experience.company}
                                onChange={(e) =>
                                    handleWorkExperienceChange(index, e)
                                }
                                required
                            />
                            <textarea
                                className="w-full p-2 mb-4 border rounded"
                                placeholder="Brief Description of Your Role"
                                name="description"
                                value={experience.description}
                                onChange={(e) =>
                                    handleWorkExperienceChange(index, e)
                                }
                            ></textarea>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="w-full border-2 border-black bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-200"
                        onClick={addWorkExperience}
                    >
                        Add Another Job Experience
                    </button>
                </section>

                <section className="mb-6">
                    <h2 className="text-white text-xl font-semibold mb-4">
                        Skills
                    </h2>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="mb-4"
                        >
                            <input
                                className="w-full p-2 mb-4 border rounded"
                                type="text"
                                placeholder="Skill"
                                value={skill}
                                onChange={(e) => handleSkillChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        className="w-full border-2 border-black bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-200"
                        onClick={addSkill}
                    >
                        Add Another Skill
                    </button>
                </section>

                {/* Submit Button */}
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
