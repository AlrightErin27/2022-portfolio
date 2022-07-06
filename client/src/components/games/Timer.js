import React from "react";
import Countdown from "react-countdown";

function Timer() {
  // Renderer callback with condition
  const rendered = ({ seconds, completed }) => {
    if (completed) {
      console.log("Timer up.");
    } else {
      return <span>🤩{seconds}</span>;
    }
  };
  return <Countdown date={Date.now() + 10000} rendered={rendered} />;
}

export default Timer;
