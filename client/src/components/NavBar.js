import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/home"
        style={{ textDecoration: "none" }}
        className="nav-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        style={{ textDecoration: "none" }}
        className="nav-link"
      >
        Projects
      </NavLink>

      <NavLink
        to="/login"
        style={{ textDecoration: "none" }}
        className="nav-link"
      >
        Arcade
      </NavLink>

      <NavLink
        to="/resume"
        style={{ textDecoration: "none" }}
        className="nav-link"
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default NavBar;
