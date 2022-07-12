import { useState, useEffect } from "react";
import dateFormat from "dateformat";

function UserInfo({ user, score }) {
  const [games, setGames] = useState([]);
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
  //   console.log("GAMES:", games);
  //   console.log("SCORE:", score);

  const renderGameTitle = games.map((game, idx) => {
    if (score.game_id === game.id) {
      return (
        <>
          <h1>{game.title}</h1>
          {game.title === "Tic Tac Toe" ? (
            <p>Wins: {score.result}</p>
          ) : (
            <p>Birds Caught: {score.result}</p>
          )}
          <p>{dateFormat(score.created_at)}</p>
        </>
      );
    }
  });

  return <div className="user-info-cont">{renderGameTitle}</div>;
}

export default UserInfo;
