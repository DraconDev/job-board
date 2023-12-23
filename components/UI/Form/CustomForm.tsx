import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

type Props = {
    send: (data: any) => void;
};

interface ITaskFormInput {
    title: string;
    description: string;
    dueDate: Date;
    bounty: number;
}

export const CustomForm = ({ send }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ITaskFormInput>();

    return (
        <div className="w-full h-full p-2 flex justify-center">
            <form
                onSubmit={handleSubmit(send)}
                className="flex flex-col w-full  p-2  rounded-md gap-3 md:w-1/2 "
            >
                <FormInput
                    text="title"
                    register={register}
                    errors={errors}
                />

                <FormInput
                    text="dueDate"
                    register={register}
                    errors={errors}
                    type="date"
                />
                <FormInput
                    text="bounty"
                    register={register}
                    errors={errors}
                    type="number"
                    condition={{
                        min: { value: 0, message: "Bounty must be positive." },
                    }}
                />
                <FormInput
                    text="description"
                    register={register}
                    errors={errors}
                    type="textarea"
                />
                <input
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary p-2 hover:bg-accent cursor-pointer"
                />
            </form>
        </div>
    );
};
