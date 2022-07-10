// import { useState, useEffect } from "react";
import Bird from "./Bird";

function Game({ birds }) {
  //   console.log(birds);

  const renderBirds = birds.map((bird, i) => {
    return <Bird bird={bird} key={i} />;
  });
  return <div>{renderBirds}</div>;
}

export default Game;
