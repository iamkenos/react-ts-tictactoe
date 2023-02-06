import Square from "../Square/Square";
import { useState } from "react";
import "./styles.css";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick(index: number) {
    if (squares[index]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(index: number) {
    return (
      <>
        <Square value={squares[index]} onSquareClick={() => handleSquareClick(index)}/>
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

  return (
    <>
      {[...new Array(3).keys()].map((row) => {
        return renderRow(row);
      })}
    </>
  );
}
