import "./todo.css";
import BasicTextFields from "../../components/input";
import AddTaskPopup from "../../components/popupInput";
import TasksStatusButton from "../../components/tasksStatusButton/tasksStatusButton";
// eslint-disable-next-line no-unused-vars
import { tasksContext } from "../../context/userTasksContext";
// eslint-disable-next-line no-unused-vars
import { searchContext } from "../../context/searchDataContext";

// react and react router imports
import { useState } from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

function TodoPage() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let taskTitleFromSearchParams = searchParams.get("title") || "";
  const navigate = useNavigate()
  
   function handleSearch (e){
     navigate("/todo/searchTasks");
     setSearchParams({ title: e.target.value });
   };

  return (
    <div className="tasks-content">
      <tasksContext.Provider value={{ todoTasks, setTodoTasks }}>
        <searchContext.Provider
          value={taskTitleFromSearchParams}
        >
          <div className="header">
            <div className="title">
              <h1>My Todo</h1>
            </div>
            <div className="search">
              <BasicTextFields
                inputValue={taskTitleFromSearchParams}
                onchange={handleSearch}
              />
            </div>
          </div>
          <div className="body">
            <Outlet></Outlet>
          </div>
          <div className="footer">
            <div className="add-task">
              <AddTaskPopup tasksValue={todoTasks} onchange={setTodoTasks} />
            </div>
            <div className="task-status">
              <div className="all-tasks">
                <TasksStatusButton
                  buttonName="All Tasks"
                  status="allTasks"
                  className="allTasks"
                />
              </div>
              <div className="inprogress-tasks">
                <TasksStatusButton
                  buttonName="In Progress"
                  status="inProgressTasks"
                  className="inProgressTasks"
                />
              </div>
              <div className="done-tasks">
                <TasksStatusButton
                  buttonName="Done"
                  status="doneTasks"
                  className="doneTasks"
                />
              </div>
            </div>
          </div>
        </searchContext.Provider>
      </tasksContext.Provider>
    </div>
  );
}

export default TodoPage;
