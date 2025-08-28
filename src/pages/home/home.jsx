import "./home.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router";

function HomePage() {

  return (
    <div className={`home-container`}>
      <h1 className="home-title">Welcome to Your To-Do App</h1>
      <p className="home-subtitle">
        Organize your tasks, stay productive, and never miss a deadline.
      </p>
      <NavLink to="/todo">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="home-btn"
        >
          Go to To-Do List
        </Button>
      </NavLink>
    </div>
  );
}

export default HomePage;
