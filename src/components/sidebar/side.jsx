import { NavLink } from "react-router";
import { useState } from "react";
import "./side.css";

// mui imports
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Home } from "@mui/icons-material";
import { List } from "@mui/icons-material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InfoIcon from "@mui/icons-material/Info";
import AddCallIcon from "@mui/icons-material/AddCall";

function SideBar() {
  const [sideStatus, setSideStatus] = useState(false);

  // function handle the side bar closed or opened
  function handleSideBarStatus() {
    if (!sideStatus) {
      setSideStatus(true);
    } else {
      setSideStatus(false);
    }
  }
  return (
    <div
      className={`side-bar-content ${sideStatus ? "closed-menu" : "open-menu"}`}
    >
      <div className="closed">
        <Stack>
          <IconButton
            onClick={handleSideBarStatus}
            size="large"
            color="primary"
            aria-label="add to shopping cart"
          >
            <MenuOpenIcon />
          </IconButton>
        </Stack>
      </div>
      <div className="logo">
        <img src="/todo.webp" alt="logo" />
        <p>taskify</p>
      </div>
      <div className="links">
        <ul>
          <Stack direction="row" spacing={2}>
            <NavLink to="/">
              <Button size="medium" startIcon={<Home />}>
                Home
              </Button>
            </NavLink>
            <NavLink to="/todo">
              <Button size="medium" startIcon={<List />}>
                ToDo
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button size="medium" startIcon={<InfoIcon />}>
                About
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button size="medium" startIcon={<AddCallIcon />}>
                Contact
              </Button>
            </NavLink>
          </Stack>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
