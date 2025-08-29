import "./allTasks.css";
import { useContext, useState } from "react";
import { tasksContext } from "../../../context/userTasksContext";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function AllTasks() {
  const { todoTasks, setTodoTasks } = useContext(tasksContext);
  const [openDial, setOpenDial] = useState(null);
  const [editStatus, setEditStatus] = useState(null);

  const toggleDial = (id) => {
    setOpenDial(openDial === id ? null : id);
  };

  // function to handle the checked or not this mean done or not
  function handleCheckedStatus(e, id) {
    if (todoTasks.length > 0) {
      setTodoTasks(
        todoTasks.map((task) =>
          task.id == id ? { ...task, taskStatusDone: e.target.checked } : task
        )
      );
    }
  }

  // handle the delete function
  function handleDeleteButton(id) {
    if (todoTasks && todoTasks.length > 0) {
      setTodoTasks((prev) => prev.filter((task) => task.id !== id));
    }
  }

  // handle the edit button
  function handleEditButton(id) {
    setEditStatus(id);
    // close the Dialog after press the edit button
    setOpenDial(openDial === id ? null : id);
  }

  function handleSaveChanges() {
    setEditStatus(null)
  }

  if (!todoTasks || todoTasks.length === 0) {
    return (
      <div className="empty">
        <h1>Start setting your tasks with us !</h1>
      </div>
    );
  }

  return (
    <div className="show-tasks">
      <ul>
        {todoTasks.map((task) => (
          <li key={task.id} className="task-card">
            <div className="task-left">
              <div className="check-box">
                <input
                  type="checkbox"
                  className="task-check"
                  onChange={(e) => handleCheckedStatus(e, task.id)}
                />
              </div>
              <div className="task-info">
                <div
                  className={`description ${editStatus === task.id ? "hide" : "display"}`}
                >
                  <h3>{task.taskTitle}</h3>
                  <p>{task.taskDescription}</p>
                </div>
                <div
                  className={`edit-value ${editStatus !== task.id ? "hide" : "display"}`}
                >
                  <input type="text" name="editValue" />
                  <button onClick={handleSaveChanges}>Save</button>
                </div>
              </div>
            </div>

            <div className="task-actions">
              <div className="speed-dial">
                <div className="setting-button">
                  <button
                    className="speed-main"
                    onClick={() => toggleDial(task.id)}
                  >
                    <SettingsIcon />
                  </button>
                </div>

                {openDial === task.id && (
                  <div className="speed-actions left">
                    <button
                      onClick={() => handleEditButton(task.id)}
                      className="speed-btn edit-btn"
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => handleDeleteButton(task.id)}
                      className="speed-btn delete-btn"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
