import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [local, setLocal] = useState("home");

  function setHome() {
    setLocal("home");
  }
  function setArcade() {
    setLocal("arcade");
  }
  function setResume() {
    setLocal("resume");
  }
  console.log(local, "🎤");

  return (
    <nav>
      {local === "home" ? null : (
        <NavLink
          to="/home"
          style={{ textDecoration: "none" }}
          className="nav-link"
          onClick={setHome}
        >
          Home
        </NavLink>
      )}

      {local === "arcade" ? null : (
        <NavLink
          to="/arcade"
          style={{ textDecoration: "none" }}
          className="nav-link"
          onClick={setArcade}
        >
          Arcade
        </NavLink>
      )}

      {local === "resume" ? null : (
        <NavLink
          to="/resume"
          style={{ textDecoration: "none" }}
          className="nav-link"
          onClick={setResume}
        >
          Resume
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
