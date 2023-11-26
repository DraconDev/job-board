import Image from "next/image";

type Props = {};

const NoJobs = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-3 p-6 text-center">
            <div className=" w-full ">
                <Image
                    src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="No jobs illustration"
                    width={500} // set the width
                    height={300} // set the height
                    layout="responsive" // make the image responsive
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                />
            </div>
            <h1 className="text-3xl font-semibold">
                Find your dream job today
            </h1>
            <p className="text-lg text-gray-600">
                You haven&apos;t searched for any jobs yet. Start your job
                search now.
            </p>
        </div>
    );
};

export default NoJobs;
