type Props = {
    title: string;
    items: {
        position: string;
        company: string;
        description: string;
        date: string;
    }[];
    handleChange: (index: any, e: any) => void;
    addItem: () => void;
};

const CVAdding = ({ title, items, handleChange, addItem }: Props) => {
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
                        name="position"
                        value={item.position}
                        onChange={(e) => handleChange(index, e)}
                        required
                    />
                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Company"
                        name="company"
                        value={item.company}
                        onChange={(e) => handleChange(index, e)}
                        required
                    />

                    <input
                        className="w-full p-2 mb-4 border rounded"
                        type="text"
                        placeholder="Date"
                        name="date"
                        value={item.date}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <textarea
                        className="w-full p-2 mb-4 border rounded"
                        placeholder="Brief Description of Your Role"
                        name="description"
                        value={item.description}
                        onChange={(e) => handleChange(index, e)}
                    ></textarea>
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
