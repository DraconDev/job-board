import { Task } from "@/type/types";
import { FaMoneyBillAlt } from "react-icons/fa";

const TaskCard = ({ task }: { task: Task }) => {
    return (
        <div className="flex flex-col bg-secondary">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <div className="w-full h-[2px] bg-accent"></div>
            <div className="flex justify-between text-gray-400">
                <div className="text-gl flex gap-2 items-center">
                    <FaMoneyBillAlt />
                    {task.bounty}
                </div>
            </div>
            <p className="mt-2">{task.description}</p>
        </div>
    );
};

export default TaskCard;
