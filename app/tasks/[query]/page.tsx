type Props = {};
import TaskContainer from "@/components/Tasks/TaskContainer";
import { RiTaskFill } from "react-icons/ri";

const Tasks = (props: Props) => {
    return (
        <div className="flex flex-col w-full h-full">
            Tasks
            <RiTaskFill />
            <TaskContainer />
        </div>
    );
};

export default Tasks;
