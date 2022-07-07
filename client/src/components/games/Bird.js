import { useRef, useEffect } from "react";
import gsap from "gsap";

function Bird({ speed, delay, img, name, handleSelectBird }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.set(buttonRef.current, { yPercent: 100 });
    gsap.to(buttonRef.current, { yPercent: 0, yoyo: true, repeat: -1 });
  }, []);

  function selectBird(e) {
    handleSelectBird(e);
  }

  return (
    <div className="single-bird">
      <img
        src={img}
        alt={name}
        speed={speed}
        delay={delay}
        className="bird-img"
        onClick={selectBird}
        ref={buttonRef}
      />
    </div>
  );
}

export default Bird;
