import React from "react";

function PlayButton({ playing, handleStartStop }) {
  function handleClick() {
    handleStartStop();
  }
  return <button onClick={handleClick}>{!playing ? "Start" : "Stop"}</button>;
}

export default PlayButton;
