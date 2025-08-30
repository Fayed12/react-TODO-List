import "./nav.css"

// mui import 
import AccountDemoSignedIn from "../accountUser";
function NavBar() {
    return (
      <div className="nav-bar-content">
        <div className="logo">
          <img src="/Taskify-logo.png" alt="taskify"/>
            </div>
            <div className="user-details">
                <AccountDemoSignedIn />
            </div>
      </div>
    );
}

export default NavBar;