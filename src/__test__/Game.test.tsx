import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../Game";
test("renders the game", () => {
  const { getByText } = render(<Game />);
  const title = getByText("Tic-Tac-Toe");
  expect(title).toBeInTheDocument();
});
test("clicking on a tile changes the player", () => {
  const { getByText, getAllByText } = render(<Game />);
  expect(getByText("Current player: X"));
  userEvent.click(getAllByText("-")[0]);
  expect(getByText("Current player: O"));
  userEvent.click(getAllByText("-")[1]);
  expect(getByText("Current player: X"));
});

test("clicking on a tile changes the tile", () => {
  const { getByTestId } = render(<Game />);
  userEvent.click(getByTestId(`cell-1`));
  expect(getByTestId(`cell-1`)).toHaveTextContent("X");
  userEvent.click(getByTestId(`cell-2`));
  expect(getByTestId(`cell-2`)).toHaveTextContent("O");
});

test("Showing a tie", () => {
  const { getByText, getByTestId, queryByText } = render(<Game />);
  const clickOrder = [1, 5, 9, 6, 3, 2, 4, 7, 8,]

  clickOrder.forEach((cell) => userEvent.click(getByTestId(`cell-${cell}`)));

  expect(getByText("No-one has won the game")).toBeInTheDocument();
  expect(queryByText("X has won the game")).not.toBeInTheDocument();
});
test("Showing a win", () => {
  const { getByText, getByTestId } = render(<Game />);
  const winningGame = [1, 4, 2, 5, 3];
  winningGame.forEach((cell) => userEvent.click(getByTestId(`cell-${cell}`)));
  expect(getByText("X has won the game"));
});

test("Game resets when reset button is clicked", () => {
  const { getByText, getByTestId, getAllByText, getByRole } = render(<Game />);
  const winningGame = [1, 4, 2, 5, 3];

  winningGame.forEach((cell) => userEvent.click(getByTestId(`cell-${cell}`)));

  expect(getByText("X has won the game"));

  userEvent.click(getByRole("button", { name: "Reset Game" }));
  expect(getByText("Current player: X"));

  const cells = getAllByText("-");
  expect(cells).toHaveLength(9);
});