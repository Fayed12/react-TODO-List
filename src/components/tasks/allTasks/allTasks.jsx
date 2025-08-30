import TaskDisplay from "../../task-display/taskDispaly";
import { useContext } from "react";
import { tasksContext } from "../../../context/userTasksContext";

function AllTasks() {
        const { todoTasks} = useContext(tasksContext);
  return (
    <>
      <TaskDisplay tasks={ todoTasks} />
    </>
  )
}

export default AllTasks;
