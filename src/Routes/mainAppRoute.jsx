import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "../pages/home/home";
import TodoPage from "../pages/todo/todo";
import DashboardLayout from "../layouts/dashboard-Layout";
import AllTasks from "../components/tasks/allTasks/allTasks";
import InProgressTasks from "../components/tasks/inProgress/inProgressTasks";
import DoneTasks from "../components/tasks/doneTasks/doneTasks";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "todo", element: <TodoPage />, children:[
          {
            index: true,
            element:<AllTasks/>
          },
          {
            path: "allTasks",
            element:<AllTasks/>
          },
          {
            path: "inProgressTasks",
            element:<InProgressTasks/>
          },
          {
            path: "doneTasks",
            element:<DoneTasks/>
          }
      ]},
    ],
  },
]);
