import "./todo.css";
import BasicTextFields from "../../components/input";
import { useState } from "react";
import AddTaskPopup from "../../components/popupInput";
import TasksStatusButton from "../../components/tasksStatusButton/tasksStatusButton";
import { Outlet } from "react-router";

function TodoPage() {
  const [searchValue, setSearchValue] = useState();
  const [todoTasks, setTodoTasks] = useState([]);

  // function set the value of the input search
  function handleSearchInput(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="tasks-content">
      <div className="header">
        <div className="title">
          <h1>My Todo</h1>
        </div>
        <div className="search">
          <BasicTextFields
            inputValue={searchValue}
            onchange={handleSearchInput}
          />
        </div>
      </div>
      <div className="body">
        <Outlet></Outlet>
        <div className="add-task">
          <AddTaskPopup tasksValue={todoTasks} onchange={setTodoTasks} />
        </div>
        <div className="task-status">
          <div className="all-tasks">
            <TasksStatusButton buttonName="All Tasks" status="allTasks" />
          </div>
          <div className="inprogress-tasks">
            <TasksStatusButton
              buttonName="In Progress"
              status="inProgressTasks"
            />
          </div>
          <div className="done-tasks">
            <TasksStatusButton buttonName="Done" status="doneTasks" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
