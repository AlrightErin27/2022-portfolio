import React from "react";
import NavBar from "./NavBar";
import ArcadeGames from "./ArcadeGames";
import LogIn from "./Login";

function Arcade({ user, setUser }) {
  return (
    <div>
      <NavBar />
      {!user ? (
        <LogIn setUser={setUser} />
      ) : (
        <ArcadeGames user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default Arcade;
