"use client";
import { TaskType } from "@/type/types";
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
            const tasks = await fetch("/api/task/list");
            const data = await tasks.json();
            // state.setTasks(data);
            // await router.push(
            //     `/tasks/${encodeURIComponent(state.searchTitle)}`
            // );
            return data as TaskType[];
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
