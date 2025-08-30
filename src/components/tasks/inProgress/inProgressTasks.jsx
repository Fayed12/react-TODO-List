import TaskDisplay from "../../task-display/taskDispaly";
import { useContext } from "react";
import { tasksContext } from "../../../context/userTasksContext";

function InProgressTasks() {
    const { todoTasks } = useContext(tasksContext);
    
    // filter the none checked tasks
    const InProgressTasks = todoTasks.filter((task) => {
        return task.taskStatusDone === false; 
    })
    console.log(InProgressTasks);
           return (
             <>
               <TaskDisplay tasks={InProgressTasks} />
             </>
           );
}

export default InProgressTasks;