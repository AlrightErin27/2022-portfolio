import { useEffect, useState } from "react";

import Countdown from "react-countdown";
import Grid from "./Grid";
import Instructions from "./Instructions";

import bird0 from "../../game-imgs/bird-game/eagle-owl.png";
import bird1 from "../../game-imgs/bird-game/falco-vespertinus.png";
import bird2 from "../../game-imgs/bird-game/great-cormorant.png";
import bird3 from "../../game-imgs/bird-game/honey-buzzard.png";
import bird4 from "../../game-imgs/bird-game/red-crossbills.png";
import bird5 from "../../game-imgs/bird-game/yellow-oriole.png";
import bird6 from "../../game-imgs/bird-game/bohemian-waxing-bird.png";
import bird7 from "../../game-imgs/bird-game/spotted-woodpecker.png";

function Birding({ user }) {
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(true);
  const [birds, setBirds] = useState([]);
  const [score, setScore] = useState([]);

  useEffect(() => {
    const mixBirds = [
      {
        img: bird0,
        name: "Eagle Owl",
      },
      {
        img: bird1,
        name: "Falco Vespertinus",
      },
      {
        img: bird2,
        name: "Great Cormorant",
      },
      {
        img: bird3,
        name: "Honey Buzzard",
      },
      {
        img: bird4,
        name: "Red Crossbills",
      },
      {
        img: bird5,
        name: "Yellow Oriole",
      },
      {
        img: bird6,
        name: "Bohemian Waxing Bird",
      },
      {
        img: bird7,
        name: "Spotted Woodpecker",
      },
    ]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setBirds(mixBirds);
  }, []);

  function onSight(seenBird) {
    if (score.includes(seenBird)) {
      console.log("Already seen species.");
    } else {
      setScore([...score, seenBird]);
    }
  }

  const startGame = () => {
    setScore([]);

    setPlaying(true);
    setFinished(false);
  };

  const endGame = () => {
    console.log("GAME IS OVER.", finished);
    setPlaying(false);
    setFinished(true);
  };

  return (
    <div className="birding">
      <h1>Birding</h1>
      <div className="b-header">
        {/* ------------ TIMER ------------ */}
        {playing ? (
          <Countdown date={Date.now() + 10000000} onComplete={endGame} />
        ) : null}
      </div>

      {/* ------------ START BUTTON ------------ */}

      {playing ? (
        <button onClick={endGame}>Stop</button>
      ) : (
        <button onClick={startGame}>Start</button>
      )}

      {/* ------------ GAME GRID ------------ */}
      {playing ? (
        <Grid birds={birds} onSight={onSight} />
      ) : (
        <Instructions score={score} user={user} />
      )}
    </div>
  );
}

export default Birding;
