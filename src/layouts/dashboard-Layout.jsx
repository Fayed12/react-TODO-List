import { NavLink, Outlet } from "react-router";
import NavBar from "../components/navbar/nav";
import SideBar from "../components/sidebar/side";

function DashboardLayout() {
    return (
      <div className="dashboard-layout">
        <div className="navbar">
          <NavBar></NavBar>
        </div>
        <main>
          <div className="sidebar">
            <SideBar></SideBar>
          </div>
          <Outlet></Outlet>
        </main>
      </div>
    );
}

export default DashboardLayout;