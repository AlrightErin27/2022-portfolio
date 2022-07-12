import { useHistory } from "react-router-dom";

import Birding from "./Birding/Birding";
import TicTacToe from "./Tic-tac-toe/TicTacToe";

function ArcadeGames({ user, setUser }) {
  const history = useHistory();

  function handleBirding() {
    history.push("/birding");
  }
  function handleTTT() {
    history.push("/tic-tac-toe");
  }
  function handleLogOut() {
    setUser();
  }
  return (
    <div className="ag-btn-cont">
      <button onClick={handleBirding}>Birding</button>
      <button onClick={handleTTT}>Tic Tac Toe</button>
      <button onClick={handleLogOut}>Log Off</button>
    </div>
  );
}

export default ArcadeGames;
