import { useState, useEffect } from "react";
import gsap from "gsap";
import gsapP from "https://cdn.skypack.dev/gsap";

function Canvas({ birds }) {
  const [inMotion, setInMotion] = useState(true);
  return (
    <div className="canvas-cont">
      <div className="canvas">
        <img src={birds[0].img} alt={birds[0].name} className="c-bird" />
      </div>
    </div>
  );
}

export default Canvas;
