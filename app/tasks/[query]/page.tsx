type Props = {};
import TaskContainer from "@/components/Tasks/TaskContainer";

const Tasks = (props: Props) => {
    return (
        <div className="flex flex-col w-full h-full mt-2">
            <TaskContainer />
        </div>
    );
};

export default Tasks;
