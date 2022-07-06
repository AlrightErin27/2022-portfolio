import React from "react";
import BirdMan from "../../game-imgs/bird-game/binoculars-man.png";
import Dove from "../../game-imgs/bird-game/dove.png";

function Instructions() {
  return (
    <div>
      To play try and catch as many birds as you can in 30 seconds.
      <>
        <img src={BirdMan} alt="bird watcher" id="in-watcher" />
        <img src={Dove} alt="dove" id="in-dove" />
      </>
    </div>
  );
}

export default Instructions;
