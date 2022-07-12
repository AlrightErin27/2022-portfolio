import { useState, useEffect } from "react";
import dateFormat from "dateformat";

function UserInfo({ user, score }) {
  const [games, setGames] = useState([]);
  const [showSpecies, setShowSpecies] = useState(false);
  // ------------ FETCH AREA ------------ //
  useEffect(() => {
    fetch("/games", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setGames)
      .catch((err) => console.log("💀 GET INDEX GAMES", err));
  }, []);

  function displaySpecies() {
    setShowSpecies(!showSpecies);
  }

  console.log(score.score_text);
  const renderGameTitle = games.map((game, idx) => {
    if (score.game_id === game.id) {
      return (
        <div key={idx} className="ui-score-txt">
          <h1>{game.title}</h1>

          {game.title === "Tic Tac Toe" ? (
            <p>Wins: {score.result}</p>
          ) : (
            <p>
              Birds Caught: {score.result}{" "}
              <button onClick={displaySpecies}>Species</button>
              {!showSpecies ? (
                <p>{score.score_text}</p>
              ) : (
                <div className="show-sp">{score.score_text}</div>
              )}
            </p>
          )}
          <p>{dateFormat(score.created_at)}</p>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div className="user-info-cont">{renderGameTitle}</div>;
}

export default UserInfo;
