import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function TicTacToe({ user }) {
  const [playerX, setPlayerX] = useState(true);
  const [count, setCount] = useState(9);
  const [isOver, setIsOver] = useState(false);
  const [xArr, setXArr] = useState([]);
  const [oArr, setOArr] = useState([]);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    const sId = e.target.id;
    const sq = document.getElementById(sId);

    if (playerX && sq.innerText !== "X" && sq.innerText !== "O" && !isOver) {
      setPlayerX(false);
      sq.innerText = "X";
      setCount(count - 1);
      setXArr([`${sId}`, ...xArr]);
    } else if (
      !playerX &&
      sq.innerText !== "X" &&
      sq.innerText !== "O" &&
      !isOver
    ) {
      setPlayerX(true);
      sq.innerText = "O";
      setCount(count - 1);
      setOArr([`${sId}`, ...oArr]);
    }
    checkIfOver();
  }

  function checkIfOver() {
    if (count === 1) {
      setIsOver(true);
      setXArr([]);
      setOArr([]);
      alert("CATS GAME");
    }
  }
  useEffect(() => {
    const win1 = ["0", "1", "2"],
      win2 = ["3", "4", "5"],
      win3 = ["6", "7", "8"],
      win4 = ["0", "3", "6"],
      win5 = ["1", "4", "7"],
      win6 = ["2", "5", "8"],
      win7 = ["0", "4", "8"],
      win8 = ["2", "4", "6"];

    const checker = (arr, target) => target.every((v) => arr.includes(v));

    if (
      checker(xArr, win1) === true ||
      checker(xArr, win2) === true ||
      checker(xArr, win3) === true ||
      checker(xArr, win4) === true ||
      checker(xArr, win5) === true ||
      checker(xArr, win6) === true ||
      checker(xArr, win7) === true ||
      checker(xArr, win8) === true
    ) {
      setIsOver(true);
      alert("X WINS");
      setXScore(xScore + 1);
      setXArr([]);
      setOArr([]);
    } else if (
      checker(oArr, win1) ||
      checker(oArr, win2) ||
      checker(oArr, win3) ||
      checker(oArr, win4) ||
      checker(oArr, win5) ||
      checker(oArr, win6) ||
      checker(oArr, win7) ||
      checker(oArr, win8)
    ) {
      setIsOver(true);
      alert("O WINS");
      setOScore(oScore + 1);
      setXArr([]);
      setOArr([]);
    }
  }, [checkIfOver]);

  function handleReset() {
    setXArr([]);
    setOArr([]);
    setIsOver(false);
    setPlayerX(true);
    setCount(9);

    for (let i = 0; i < 9; i++) {
      let a = document.getElementById(i);
      a.innerText = "";
    }
  }

  function handleBack() {
    let data = {
      user_id: user.id,
      game_id: 30,
      result: xScore,
      score_text: "n/a",
    };

    // ----------- FETCH AREA -------------- //
    fetch("/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("Successfully added score:", data);
        history.push("/arcade");
      })
      .catch((error) => {
        console.error("Error adding new score:", error);
      });

    // ------------ FETCH AREA ------------ //
    history.push("./arcade");
  }

  return (
    <div id="ttt" className="back">
      <button onClick={handleBack} className="ttt-back-btn">
        Back
      </button>
      <h1>Tic Tac Toe</h1>
      <h3>User plays as X.</h3>
      <p>
        {user.name} / X Score: {xScore}
        <br />O Score: {oScore}
      </p>
      <div className="ttt-grid">
        <div className="row" id="row1">
          <div
            className="ttt-square"
            id="0"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="1"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="2"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>

        <div className="row" id="row2">
          <div
            className="ttt-square"
            id="3"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="4"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="5"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>

        <div className="row" id="row3">
          <div
            className="ttt-square"
            id="6"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="7"
            onClick={(e) => handleClick(e)}
          ></div>
          <div
            className="ttt-square"
            id="8"
            onClick={(e) => handleClick(e)}
          ></div>
        </div>
      </div>
      {!isOver ? (
        <h3>{playerX ? "Player X's turn." : "Player O's turn."}</h3>
      ) : null}
      {isOver ? (
        <div className="ttt-btn" onClick={handleReset}>
          Restart
        </div>
      ) : null}
    </div>
  );
}

export default TicTacToe;
