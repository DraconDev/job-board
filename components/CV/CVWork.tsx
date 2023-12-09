import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    title: string;
    workExperiences: {
        position: string;
        company: string;
        description: string;
        date: string;
    }[];
    register: UseFormRegister<FieldValues>;
    addItem: () => void;
};

const CVAdding = ({ title, workExperiences, register, addItem }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
            {workExperiences.map((item, index) => (
                <div
                    key={index}
                    className="mb-4"
                >
                    <input
                        className="w-full p-2 mb-4 border rounded  bg-secondary text-white border-primary"
                        type="text"
                        placeholder="Position"
                        {...register(`work[${index}].position`, {
                            required: true,
                        })}
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                        type="text"
                        placeholder="Company"
                        {...register(`work[${index}].company`, {
                            required: true,
                        })}
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                        type="text"
                        placeholder="Date"
                        {...register(`work[${index}].date`)}
                    />
                    <textarea
                        className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                        placeholder="Brief Description of Your Role"
                        {...register(`work[${index}].description`)}
                    />
                </div>
            ))}
            <button
                type="button"
                className="w-full border-2 border-black bg-green-500 text-black p-2 rounded-lg hover:bg-green-600 transition duration-200"
                onClick={addItem}
            >
                Add Another Job Experience
            </button>
        </section>
    );
};

export default CVAdding;
