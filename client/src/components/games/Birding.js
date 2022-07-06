import { useEffect, useState } from "react";
import Grid from "./Grid";
import Countdown from "react-countdown";
import bird0 from "../../game-imgs/bird-game/eagle-owl.png";
import bird1 from "../../game-imgs/bird-game/falco-vespertinus.png";
import bird2 from "../../game-imgs/bird-game/great-cormorant.png";
import bird3 from "../../game-imgs/bird-game/honey-buzzard.png";
import bird4 from "../../game-imgs/bird-game/red-crossbills.png";
import bird5 from "../../game-imgs/bird-game/yellow-oriole.png";
import bird6 from "../../game-imgs/bird-game/bohemian-waxing-bird.png";
import bird7 from "../../game-imgs/bird-game/spotted-woodpecker.png";

function Birding() {
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(true);
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const mixBirds = [bird0, bird1, bird2, bird3, bird4, bird5, bird6, bird7]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setBirds(mixBirds);
  }, []);

  const endGame = () => {
    console.log("GAME IS OVER.");
    setPlaying(false);
    setFinished(true);
  };

  return (
    <div className="birding">
      <h1>Birding</h1>
      <div className="b-header">
        {/* ------------ TIMER ------------ */}
        {playing ? (
          <Countdown date={Date.now() + 10000} onComplete={endGame}>
            <p>0</p>
          </Countdown>
        ) : null}
      </div>

      {/* ------------ START BUTTON ------------ */}
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>

      {/* ------------ GAME GRID ------------ */}
      {playing ? <Grid birds={birds} /> : "INSTRUCTIONS"}
    </div>
  );
}

export default Birding;
