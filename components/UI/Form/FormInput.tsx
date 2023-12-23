import { title } from "process";

type Props = {
    register: any;
    text: string;
    errors: any;
    type?: string;
    condition?: {};
};

const FormInput = ({ register, text, errors, type, condition }: Props) => {
    return (
        <div className="w-full  ">
            <p className="">{text[0].toUpperCase() + text.slice(1)}</p>
            {type == "textarea" ? (
                <textarea
                    {...register(text, { required: "Required." })}
                    className="bg-secondary p-2 rounded-md w-full min-h-[150px]"
                    type="textarea"
                    errors={errors}
                />
            ) : (
                <input
                    {...register(text, { required: "Required.", ...condition })}
                    className="bg-secondary p-2 rounded-md w-full"
                    errors={errors}
                    type={type}
                />
            )}
            {errors[title] && <p>{errors[title].message}</p>}
        </div>
    );
};

export default FormInput;
