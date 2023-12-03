type Props = {};

const cvPersonal = (props: Props) => {
    return (
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
    );
};

export default cvPersonal;
