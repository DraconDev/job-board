type Props = {
    title: string;
    items: string[];
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
                        value={item}
                        onChange={(e) => handleChange(index, e)}
                        required
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
