import "./tasksStatusButton.css"
import { NavLink } from "react-router";

function TasksStatusButton({ buttonName, status, className  }) {
  return (
    <NavLink to={`/todo/${status}`} className="button-status">
      <button
        className={className}
        type="button"
      >
        {buttonName}
      </button>
    </NavLink>
  );
}

export default TasksStatusButton;