import { RouterProvider } from "react-router";
import { AppRouter } from "./Routes/mainAppRoute";
import DashboardLayout from "./layouts/dashboard-Layout";

function App() {
  return (
      <RouterProvider router={AppRouter} />
  );
}

export default App;
