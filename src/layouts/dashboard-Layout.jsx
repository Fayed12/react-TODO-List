import { NavLink, Outlet } from "react-router";
import NavBar from "../components/navbar/nav";
import SideBar from "../components/sidebar/side";

function DashboardLayout() {
    return (
      <div className="dashboard-layout">
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <main>
          <div className="navbar">
            <NavBar></NavBar>
          </div>
          <div className="page-content">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    );
}

export default DashboardLayout;