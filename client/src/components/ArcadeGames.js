import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserInfo from "./UserInfo";
import BirdWatcher from "../game-imgs/bird-game/binoculars-man.png";
import Dove from "../game-imgs/bird-game/dove.png";
import TicIcon from "../game-imgs/tictactoe/ttticon.png";

function ArcadeGames({ user, setUser }) {
  const [scores, setScores] = useState([]);

  const history = useHistory();

  // ------------ FETCH AREA ------------ //
  useEffect(() => {
    fetch("/scores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(setScores)
      .catch((err) => console.log("💀 GET INDEX SCORES", err));
  }, []);
  // console.log("SCORES:", scores);

  function handleBirding() {
    history.push("/birding");
  }
  function handleTTT() {
    history.push("/tic-tac-toe");
  }
  function handleLogOut() {
    setUser();
  }

  const renderUsersInfo = scores.map((score, idx) => {
    if (score.user_id === user.id) {
      return <UserInfo key={idx} user={user} score={score} />;
    }
  });

  return (
    <div className="ag-cont">
      <div className="ag-user-info">
        <div className="ag-hello">
          Hello <p>{user.name}</p>
        </div>
        {renderUsersInfo}
        <button onClick={handleLogOut}>Log Off</button>
      </div>

      <div className="ag-games-cont">
        <div className="ag-game-btns">
          <button onClick={handleBirding} id="birding-btn">
            <img src={BirdWatcher} alt="bird-watcher" id="watcher" />
            <img src={Dove} alt="dove" id="dove" />
          </button>

          <button onClick={handleTTT} id="ttt-btn">
            <img src={TicIcon} alt="tictactoe-icon" id="ttt-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArcadeGames;
