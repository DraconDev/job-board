import { useForm } from "next/form-events";

export default function PostJob() {
    const jobSchema = {
        title: "",
        description: "",
        salaryMin: 0,
        salaryMax: 0,
        location: "",
        date: "",
        jobType: "",
        company: "",
    };

    const form = useForm({
        defaultValues: jobSchema,
        onSubmit: (data) => {
            // Handle form submission
            console.log(data);
        },
    });

    return (
        <div className="flex items-center justify-center h-screen flex-column">
            <div className="">PostJob HELLO</div>
            <form {...form}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
