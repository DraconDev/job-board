import { TaskType } from "@/type/types";
import { GiMoneyStack } from "react-icons/gi";

const TaskCard = ({ task }: { task: TaskType }) => {
    return (
        <div className="flex flex-col bg-secondary p-2 min-h-[250px] min-w-[250px] grow hover:bg-opacity-60 rounded-lg max-w-[350px]">
            <div className="flex flex-col hover:scale-[1.01] h-full">
                <h2 className="text-xl items-center font-semibold text-center">
                    {task.title}
                </h2>
                <div className="w-full h-[2px] bg-accent my-1"></div>
                <div className="flex flex-col justify-between h-full grows">
                    <p className="">{task.description}</p>
                    <div className="text-gl gap-2  justify-between items-center flex">
                        <div className="flex justify-between text-gray-400 gap-1 items-center w-full">
                            <div className="flex gap-1 ">
                                <GiMoneyStack className="h-7 w-7" />
                                {task.bounty}
                            </div>
                            {task.postDate &&
                                task.postDate.toString().slice(0, 10)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
