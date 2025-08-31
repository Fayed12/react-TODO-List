import TaskDisplay from "./task-display/taskDispaly";
import { useContext } from "react";
import { tasksContext } from "../context/userTasksContext";
import { searchContext } from "../context/searchDataContext";

function SearchTasks() {
  const { todoTasks } = useContext(tasksContext);
  const taskTitleFromSearchParams = useContext(searchContext);

  const filteredData = todoTasks.filter((task) =>
    task.taskTitle
      .toLowerCase()
      .includes(taskTitleFromSearchParams.toLowerCase())
  );

  return (
    <>
      <TaskDisplay tasks={filteredData} />
    </>
  );
}

export default SearchTasks;
