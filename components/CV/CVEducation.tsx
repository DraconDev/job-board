type Props = {};

const CVEducation = (props: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Education</h2>
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
    );
};

export default CVEducation;
