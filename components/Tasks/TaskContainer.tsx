"use client";
import { TaskType } from "@/type/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import TaskCard from "./TaskCard";

type Props = {};

const TaskContainer = (props: Props) => {
    // get list of tasks with react query
    // use react query to fetch tasks
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

    // const state = useAppState((state) => state);
    // const dummyTasks: TaskType[] = [
    //     {
    //         title: "Task 1",
    //         description: "Description 1",
    //         bounty: 10,
    //         postDate: new Date(),
    //     },
    //     {
    //         title: "Task 2",
    //         description: "Description 2",
    //         bounty: 20,
    //         postDate: new Date(),
    //     },
    //     {
    //         title: "Task 3",
    //         description: "Description 3",
    //         bounty: 30,
    //         postDate: new Date(),
    //     },
    //     {
    //         title: "Task 4",
    //         description: "Description 4",
    //         bounty: 40,
    //         postDate: new Date(),
    //     },
    // ];

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
