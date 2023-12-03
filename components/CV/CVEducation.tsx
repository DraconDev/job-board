import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<FieldValues>;
};

const CVEducation = ({ register }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Education</h2>
            <input
                className="w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Degree"
                {...register("degree", { required: "Degree is required." })}
            />
            <input
                className="w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Institution"
                {...register("institution", {
                    required: "Institution is required.",
                })}
            />
            <input
                className="w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Year of Graduation"
                {...register("yearOfGraduation")} // Assuming this is optional, no validation rules are applied
            />
        </section>
    );
};

export default CVEducation;
