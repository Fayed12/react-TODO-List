import TaskDisplay from "../../task-display/taskDispaly";
import { useContext } from "react";
import { tasksContext } from "../../../context/userTasksContext";

function InProgressTasks() {
    const { todoTasks } = useContext(tasksContext);

  // filter the none checked tasks
  const DoneTasks = todoTasks.filter((task) => {
    return task.taskStatusDone === true;
  });
  return (
    <>
      <TaskDisplay tasks={DoneTasks}/>
    </>
  );
}

export default InProgressTasks;
