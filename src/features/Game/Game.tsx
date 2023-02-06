import Board from "../../components/Board/Board";
import MoveHistory from "../../components/MoveHistory/MoveHistory";
import { useState } from "react";
import "./styles.css";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handleSquareClick(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleLeapButtonClick(moveIndex: number) {
    setCurrentMove(moveIndex);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onClick={handleSquareClick}
        />
      </div>
      <div className="game-info">
        <div>
          You are at{" "}
          {currentMove === 0 ? "game start" : "move # " + currentMove}
        </div>
        <ol>
          <MoveHistory 
            history={history}
            onClick={handleLeapButtonClick}
          />
        </ol>
      </div>
  </div>
  );
};