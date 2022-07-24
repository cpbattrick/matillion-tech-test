import { FunctionComponent, useState } from "react";
import Board from "./components/Board";
import "./styles/Game.css";
import determineTie from "./utils/determine-tie";
import calculateWinner from "./utils/calculate-winner";
import { Cells, Player } from "./types";

const App: FunctionComponent = () => {
  const [player, setPlayer] = useState<Player>("X");
  const [cells, setCells] = useState<Cells>(new Array(9).fill(null));
  const winner = calculateWinner(cells);
  const isTie = determineTie(cells, winner);

  const clickCell = (cell: number) => {
    if (cells[cell] !== null || winner) {
      return;
    };

    const newCells = [...cells];
    newCells[cell] = player;
    setCells(newCells);

    if (player === "X") setPlayer("O");
    else setPlayer("X");
  };

  const resetGame = () => {
    setPlayer("X");
    setCells(new Array(9).fill(null));
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <p>Current player: {player}</p>
      <Board clickCell={clickCell} cells={cells} />
      {isTie && <p>No-one has won the game</p>}
      {winner && <p>{winner} has won the game</p>}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;