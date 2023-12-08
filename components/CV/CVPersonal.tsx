import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<FieldValues>;
};

const CvPersonal = ({ register }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">
                Personal Information
            </h2>
            <input
                className="w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: true })}
            />
            {/* <input
                className="w-full p-2 mb-4 border rounded"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
            /> */}
            <input
                className="w-full p-2 mb-4 border rounded"
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber")}
            />
        </section>
    );
};

export default CvPersonal;
