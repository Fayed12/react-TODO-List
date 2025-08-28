import "./allTasks.css";
import { useContext } from "react";
import { tasksContext } from "../../../context/userTasksContext";

function AllTasks() {
  const Tasks = useContext(tasksContext);
  let tasksList;

  if (Tasks && Tasks.length > 0) {
    tasksList = Tasks.map((task) => (
      <li key={task.id} className="task-card">
        <div className="task-left">
          <input type="checkbox" className="task-check" />
          <div className="task-info">
            <h3>{task.taskTitle}</h3>
            <p>{task.taskDescription}</p>
          </div>
        </div>
        <div className="task-actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </li>
    ));
  }

  if (!Tasks || Tasks.length === 0) {
    return (
      <div className="empty">
        <h1>Start setting your tasks with us</h1>
      </div>
    );
  } else {
    return (
      <div className="show-tasks">
        <ul>{tasksList}</ul>
      </div>
    );
  }
}

export default AllTasks;
