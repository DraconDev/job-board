import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    title: string;
    items: {
        position: string;
        company: string;
        description: string;
        date: string;
    }[];
    register: UseFormRegister<FieldValues>;
    addItem: () => void;
};

const CVAdding = ({ title, items, register, addItem }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="mb-4"
                >
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Position"
                        {...register(`items[${index}].position`, {
                            required: true,
                        })}
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Company"
                        {...register(`items[${index}].company`, {
                            required: true,
                        })}
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Date"
                        {...register(`items[${index}].date`)}
                    />
                    <textarea
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Brief Description of Your Role"
                        {...register(`items[${index}].description`)}
                    />
                </div>
            ))}
            <button
                type="button"
                className="w-full border-2 border-black bg-green-500 text-black p-2 rounded hover:bg-green-600 transition duration-200"
                onClick={addItem}
            >
                Add Another Job Experience
            </button>
        </section>
    );
};

export default CVAdding;
