import React from "react";
import BirdMan from "../../game-imgs/bird-game/binoculars-man.png";
import Dove from "../../game-imgs/bird-game/dove.png";

function Instructions({ user }) {
  return (
    <div className="in-cont">
      <p>{user.name}</p>- try to catch as many birds as you can in 30 seconds.
      <div className="in-img-cont">
        <img src={BirdMan} alt="bird watcher" id="in-watcher" />
        <img src={Dove} alt="dove" id="in-dove" />
      </div>
    </div>
  );
}

export default Instructions;
