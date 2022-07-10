import { useState, useEffect } from "react";
import Instructions from "./Instructions";
import PlayButton from "./PlayButton";
import Score from "./Score";
import Game from "./Game";

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
  const [score, setScore] = useState(0);
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    const mixBirds = [
      {
        img: bird0,
        name: "Eagle Owl",
      },
      //   {
      //     img: bird1,
      //     name: "Falco Vespertinus",
      //   },
      //   {
      //     img: bird2,
      //     name: "Great Cormorant",
      //   },
      //   {
      //     img: bird3,
      //     name: "Honey Buzzard",
      //   },
      //   {
      //     img: bird4,
      //     name: "Red Crossbills",
      //   },
      //   {
      //     img: bird5,
      //     name: "Yellow Oriole",
      //   },
      //   {
      //     img: bird6,
      //     name: "Bohemian Waxing Bird",
      //   },
      //   {
      //     img: bird7,
      //     name: "Spotted Woodpecker",
      //   },
    ]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setBirds(mixBirds);
  }, []);

  function handleStartStop() {
    setPlaying(!playing);
  }

  return (
    <div>
      <PlayButton playing={playing} handleStartStop={handleStartStop} />
      <Score score={score} />
      {!playing ? <Instructions user={user} /> : <Game birds={birds} />}
    </div>
  );
}

export default Birding;
