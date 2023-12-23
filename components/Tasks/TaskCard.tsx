import { TaskType } from "@/type/types";
import { GiMoneyStack } from "react-icons/gi";

const TaskCard = ({ task }: { task: TaskType }) => {
    return (
        <div className="flex flex-col bg-secondary p-2 min-h-[250px] min-w-[250px] grow hover:bg-opacity-60 rounded-lg">
            <div className="flex flex-col hover:scale-[1.01]">
                <h2 className="text-xl items-center font-semibold text-center">
                    {task.title}
                </h2>
                <div className="w-full h-[2px] bg-accent"></div>
                <div className="text-gl gap-2  justify-between items-center flex">
                    <div className="flex justify-between text-gray-400 gap-1 items-center">
                        <GiMoneyStack className="h-7 w-7" />
                        {task.bounty}
                    </div>
                </div>
                <p className="">{task.description}</p>
            </div>
        </div>
    );
};

export default TaskCard;
