import React from "react";

function Bird({ bird }) {
  return <img src={bird.img} alt={bird.name} className="bird-img" />;
}

export default Bird;
