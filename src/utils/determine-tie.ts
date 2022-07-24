import { Cells, SingleCell } from "../types";

const determineTie = (cells: Cells, winner: SingleCell) => {
  if (cells.includes(null) || winner) return false;
  else return true;
};

export default determineTie;
