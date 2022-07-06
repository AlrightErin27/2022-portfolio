import { useEffect, useState } from "react";

// import bird1 from "../../game-imgs/bird-game/eagle-owl.png";

function Birding() {
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(true);
  const [counter, setCounter] = useState(30);
  const TIME_LIMIT = 30000;

  const endGame = () => {
    setPlaying(false);
    setFinished(true);
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  function handleClick(e) {
    console.log(e.target.value);
  }

  return (
    <div className="birding">
      <h1>Birding</h1>

      <div className="b-header">
        <p>Score: </p>
        {playing ? <p>Timer: {counter}</p> : <></>}
      </div>

      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
      {playing ? (
        <div className="grid">
          <div className="square" id="0" onClick={(e) => handleClick(e)}>
            {/* <img src={bird1} className="bird-img" /> */}
          </div>
          <div className="square" id="1" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="2" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="3" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="4" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="5" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="6" onClick={(e) => handleClick(e)}></div>
          <div className="square" id="7" onClick={(e) => handleClick(e)}></div>
        </div>
      ) : (
        "INSTRUCTIONS"
      )}
    </div>
  );
}

export default Birding;
