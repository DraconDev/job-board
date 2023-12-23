"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import TaskCard from "./TaskCard";

type Props = {};

const TaskContainer = () => {
    // Access the query parameters
    const params = useParams();
    const query = params.query as string;
    console.log("query:", query);
    const router = useRouter();
    const getTasks = async () => {
        try {
            const endpoint =
                query !== undefined ||
                query !== "" ||
                query !== null ||
                query !== "all"
                    ? `/api/task/list?search=${encodeURIComponent(query)}`
                    : "/api/task/list";

            const tasks = await fetch(endpoint);
            const data = await tasks.json();

            await router.push(`/tasks/${query}`);
            return data;
        } catch (error) {
            console.error("Error fetching tasks:", error);
            // Handle the error as needed
        }
    };

    const { data: tasks } = useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks,
    });

    return (
        <div className="flex gap-2 w-full flex-wrap">
            {tasks &&
                tasks.map((task) => (
                    <TaskCard
                        key={task.title}
                        task={task}
                    />
                ))}
        </div>
    );
};

export default TaskContainer;
