import { Cells } from "../types";

const winningScenarios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
  
const calculateWinner = (cells: Cells) => {
  let winner = null;
  winningScenarios.forEach((winningScenario) => {
    if (
      cells[winningScenario[0]] === cells[winningScenario[1]] &&
      cells[winningScenario[0]] === cells[winningScenario[2]] &&
      cells[winningScenario[0]] !== null
    ) {
      winner = cells[winningScenario[0]];
      return;
    }
  });
  return winner;
};

export default calculateWinner;
