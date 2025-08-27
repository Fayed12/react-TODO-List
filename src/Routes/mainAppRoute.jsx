import { createBrowserRouter, Outlet } from "react-router";
import HomePage from "../pages/home/home";
import TodoPage from "../pages/todo/todo";
import DashboardLayout from "../layouts/dashboard-Layout";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "todo", element: <TodoPage /> },
    ],
  },
]);
