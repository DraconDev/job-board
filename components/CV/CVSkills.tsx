import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    title: string;
    skills: string[];
    register: UseFormRegister<FieldValues>;
    addItem: () => void;
};

const CVAdding = ({ title, skills, register, addItem }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
            {skills.map((item, index) => (
                <div
                    key={index}
                    className="mb-4"
                >
                    <input
                        className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                        type="text"
                        placeholder="Position"
                        {...register(`skills[${index}]`, { required: true })}
                    />
                </div>
            ))}
            <button
                type="button"
                className="w-full border-2 border-black bg-green-500 text-black p-2 rounded-lg hover:bg-green-600 transition duration-200 "
                onClick={addItem}
            >
                Add Another Skill
            </button>
        </section>
    );
};

export default CVAdding;
