import Square from "../Square/Square";
import { BoardProps } from "./types";
import "./styles.css";

export default function Board(props: BoardProps) {
  const { onClick, squares, xIsNext } = props;
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleSquareClick(index: number) {
    if (squares[index] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onClick(nextSquares);
  }

  function renderSquare(index: number) {
    return (
      <>
        <Square
          value={squares[index]}
          onSquareClick={() => handleSquareClick(index)}
        />
      </>
    );
  }

  function renderRow(row: number) {
    return (
      <>
        <div key={row} className="board-row">
          {[...new Array(3).keys()].map((col) => {
            return renderSquare(row * 3 + col);
          })}
        </div>
      </>
    );
  }

  function calculateWinner(squares: typeof Square[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[...new Array(3).keys()].map((row) => {
        return renderRow(row);
      })}
    </>
  );
}
