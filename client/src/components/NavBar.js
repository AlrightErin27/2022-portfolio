import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [home, setHome] = useState(true);
  const [projects, setProjects] = useState(false);
  const [arcade, setArcade] = useState(false);
  const [resume, setResume] = useState(false);

  function handleHome() {
    console.log("Clicked Home");
  }
  function handleProjects() {
    console.log("Clicked Projects");
  }
  function handleResume() {
    console.log("Clicked Resume");
  }
  function handleArcade() {
    console.log("Clicked Arcade");
  }

  return (
    <nav>
      <NavLink
        to="/home"
        style={{ textDecoration: "none" }}
        className="nav-link"
        onClick={handleHome}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        style={{ textDecoration: "none" }}
        className="nav-link"
        onClick={handleProjects}
      >
        Projects
      </NavLink>

      <NavLink
        to="/login"
        style={{ textDecoration: "none" }}
        className="nav-link"
        onClick={handleArcade}
      >
        Arcade
      </NavLink>

      <NavLink
        to="/resume"
        style={{ textDecoration: "none" }}
        className="nav-link"
        onClick={handleResume}
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default NavBar;
