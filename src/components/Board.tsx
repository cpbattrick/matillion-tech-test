import { FunctionComponent } from "react";
import { Cells } from "../types";
import Cell from "./Cell";

interface BoardProps {
  cells: Cells;
  clickCell: (cell: number) => void;
}

const Board: FunctionComponent<BoardProps> = ({ cells, clickCell }) => {
  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          onClick={() => clickCell(index)}
          cell={index}
          player={cell}
        />
      ))}
    </div>
  );
};

export default Board;
