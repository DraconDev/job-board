import { uri } from "@/db/mongo";
import { JobPost } from "@/db/schema";
import mongoose from "mongoose";

type FilterType = {
    // title: string;
    // location?: string;
    // role?: string;
    // date?: string;
    // salary?: string;
    // jobLocation?: string;
    [key: string]: string;
};

export async function fetchJobsByFilter(filter: FilterType) {
    await mongoose.connect(uri);

    const query: any = {
        title: { $regex: filter.title, $options: "i" },
    };

    if (filter.location !== undefined && filter.location !== "") {
        query.location = { $regex: filter.location, $options: "i" };
    }

    if (filter.role !== undefined && filter.role !== "") {
        query.role = {
            $gte: filter.role,
        };
    }

    if (filter.date !== undefined && filter.date !== "") {
        switch (filter.date) {
            case "Last day":
                query.date = {
                    $gte: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
                };
            case "Last week":
                query.date = {
                    $gte: new Date(
                        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
                    ),
                };
                break;
            case "Last month":
                query.date = {
                    $gte: new Date(
                        new Date().getTime() - 30 * 24 * 60 * 60 * 1000
                    ),
                };
                break;
            default:
                break;
        }
    }

    if (filter.salary !== undefined && filter.salary !== "") {
        const salary = parseInt(filter.salary.replace(/\D/g, ""));
        query.salaryMin = { $gte: salary };
    }

    if (filter.jobLocation !== undefined && filter.jobLocation !== "") {
        query.jobType = filter.jobLocation;
    }

    try {
        const jobs = await JobPost.find(query);
        return jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    } finally {
        await mongoose.disconnect();
    }
}

// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);

//     const title = searchParams.get("title");
//     const location = searchParams.get("location");
//     const role = searchParams.get("role");
//     const date = searchParams.get("date");
//     const salary = searchParams.get("salary");
//     const jobLocation = searchParams.get("jobLocation");

//     const jobs = await fetchJobsByFilter({
//         title: title ?? "",
//         location: location ?? "",
//         role: role ?? "",
//         date: date ?? "",
//         salary: salary ?? "",
//         jobLocation: jobLocation ?? "",
//     });

//     // * return jobs
//     return new Response(JSON.stringify(jobs));
// }

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    // Only include parameters if they are provided
    const filter: FilterType = {
        title: searchParams.get("title") ?? "",
    };

    const optionalParams = [
        "location",
        "role",
        "date",
        "salary",
        "jobLocation",
    ];
    optionalParams.forEach((param) => {
        const value = searchParams.get(param);
        if (value) {
            filter[param] = value;
        }
    });

    const jobs = await fetchJobsByFilter(filter);

    // * return jobs
    return new Response(JSON.stringify(jobs), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
