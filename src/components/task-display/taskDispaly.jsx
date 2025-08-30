import "./taskDispaly.css"
import { useState, useContext } from "react";
import { tasksContext } from "../../context/userTasksContext";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateValue from"../update-success/updateSuccess"
import TaskDoneSuccess from "../taskDoneSuccess/taskDoneSuccess";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function TaskDisplay({ tasks}) {
  const { setTodoTasks } = useContext(tasksContext);
  const [openDial, setOpenDial] = useState(null);
  const [editStatus, setEditStatus] = useState(null);
    const [show, setShow] = useState(false);
    const [taskDone, setTaskDone] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();

  // function to trigger popup
  const handleShowPopup = () => {
    setShow(true);

    // hide automatically after 3 seconds
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const toggleDial = (id) => {
    setOpenDial(openDial === id ? null : id);
  };

  // function to handle the checked or not this mean done or not
    function handleCheckedStatus(e, id) {
      let confirmDone = window.confirm("Are you Sure you want to make this task be 'Done' ?")
    if (!confirmDone) {
        alert("The action has been blocked !!")
    } else {
        let finalConfirm = window.confirm("If you make task Done you Can not change it again, continue ?");
        if (!finalConfirm) {
            alert("The action has been blocked !!")
        } else {
            if (tasks.length > 0) {
              setTodoTasks(
                tasks.map((task) =>
                  task.id == id
                    ? { ...task, taskStatusDone: e.target.checked }
                    : task
                )
                );
                setTaskDone(true)
            }
        }
    }
  }

  // handle the delete function
  function handleDeleteButton(id) {
      const deleteConfirm = window.confirm("Are you sure you want to delete this task ?");
      if (!deleteConfirm) {
        alert("The action has been blocked !!")
      } else {
          if (tasks && tasks.length > 0) {
            setTodoTasks((prev) => prev.filter((task) => task.id !== id));
          }
      }
  }

  // handle the edit button
  function handleEditButton(e,id) {
    // close the Dialog after press the edit button
      setOpenDial(openDial === id ? null : id);
      //  go to all tasks to set the changes
    const currentLocation = location.pathname;
    if (currentLocation !== "/todo/allTasks") {
        navigate("/todo/allTasks" , {replace:true})
        setTodoTasks(
          tasks.map((task) =>
            task.id == id ? { ...task, taskStatusDone: false } : task
          )
        );
    } else {
        setTodoTasks(
          tasks.map((task) =>
            task.id == id ? { ...task, taskStatusDone: false } : task
          )
        );
      }
    setEditStatus(id);
  }

  function handleSaveChanges() {
    setEditStatus(null);
    handleShowPopup();
  }

  function handleEditTaskValue(e, id) {
    if (e.target.value == "") {
      alert("please enter you new value !!")
    }else {
      setTodoTasks(
        tasks.map((task) =>
          task.id == id ? { ...task, taskTitle: e.target.value } : task
        )
      );
    }
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty">
        <h1>Start setting your tasks with us !</h1>
      </div>
    );
  }

  return (
      <div className="show-tasks">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-card">
              <div className="task-left">
                {task.taskStatusDone == false && (
                  <div className="check-box">
                    <input
                      checked={task.taskStatusDone}
                      type="checkbox"
                      className="task-check"
                      onChange={(e) => handleCheckedStatus(e, task.id)}
                    />
                  </div>
                )}
                <div className="task-info">
                  <div
                    className={`description ${editStatus === task.id ? "hide" : "display"}`}
                  >
                    <h3>
                      {task.taskStatusDone ? (
                        <del
                          className={task.taskStatusDone && "checked-success"}
                        >
                          {task.taskTitle}
                        </del>
                      ) : (
                        task.taskTitle
                      )}
                    </h3>
                    <p>{task.taskDescription}</p>
                  </div>
                  <div
                    className={`edit-value ${editStatus !== task.id ? "hide" : "display"}`}
                  >
                    <div>
                      <input
                        type="text"
                        name="editValue"
                        value={task.taskTitle}
                        onChange={(e) => handleEditTaskValue(e, task.id)}
                      />
                      <button onClick={handleSaveChanges}>Save</button>
                    </div>
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
                        onClick={(e) => handleEditButton(e, task.id)}
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
        {show && <UpdateValue />}
        {taskDone && <TaskDoneSuccess />}
      </div>
  );
}

export default TaskDisplay;