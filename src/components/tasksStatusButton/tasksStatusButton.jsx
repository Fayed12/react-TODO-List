import "./tasksStatusButton.css"
import { useNavigate } from "react-router";

function TasksStatusButton({ buttonName, status }) {

  const navigate = useNavigate()
  return (
    <div className="button-status">
      <button type="button" onClick={() => navigate(`/todo/${status}`)}>
        {buttonName}
      </button>
    </div>
  );
}

export default TasksStatusButton;