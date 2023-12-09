import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
    register: UseFormRegister<FieldValues>;
};

const CVEducation = ({ register }: Props) => {
    return (
        <section className="mb-6">
            <h2 className="text-white text-xl font-semibold mb-4">Education</h2>
            <input
                className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                type="text"
                placeholder="Degree"
                {...register("degree", { required: "Degree is required." })}
            />
            <input
                className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                type="text"
                placeholder="Institution"
                {...register("institution", {
                    required: "Institution is required.",
                })}
            />
            {/* <h2 className="text-white text-xl font-semibold mb-4">
                Year of Graduation
            </h2>
            <DatePicker /> */}
            <input
                className="w-full p-2 mb-4 border rounded bg-secondary text-white border-primary"
                type="text"
                placeholder="Year of Graduation"
                {...register("yearOfGraduation")}
            />
        </section>
    );
};

export default CVEducation;
