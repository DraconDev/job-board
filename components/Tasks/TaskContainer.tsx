import { Task } from "@/type/types";
import TaskCard from "./TaskCard";

type Props = {};

const TaskContainer = (props: Props) => {
    const dummyTasks: Task[] = [
        {
            title: "Task 1",
            description: "Description 1",
            bounty: 10,
            postDate: new Date(),
        },
        {
            title: "Task 2",
            description: "Description 2",
            bounty: 20,
            postDate: new Date(),
        },
        {
            title: "Task 3",
            description: "Description 3",
            bounty: 30,
            postDate: new Date(),
        },
        {
            title: "Task 4",
            description: "Description 4",
            bounty: 40,
            postDate: new Date(),
        },
    ];
    return (
        <div className="flex  ">
            {dummyTasks.map((task) => (
                <TaskCard
                    key={task.title}
                    task={task}
                />
            ))}
        </div>
    );
};

export default TaskContainer;
