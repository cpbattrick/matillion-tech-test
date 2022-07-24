import { FunctionComponent } from "react";
import { SingleCell } from "../types";

interface CellProps {
  onClick: (cell: number) => void;
  cell: number;
  player: SingleCell;
}
const Cell: FunctionComponent<CellProps> = ({ onClick, cell, player }) => {
  return (
    <div
      data-testid={`cell-${cell + 1}`}
      onClick={() => onClick(cell)}
      className="cell"
    >
      <span className="cell-contents">{player ? player : "-"}</span>
    </div>
  );
};
export default Cell;
