import React from "react";
import Square from "../Square/Square";
import "./styles.css";

class Board extends React.Component {
  squares = [Array(9).fill(null)];

  renderSquare(index: number) {
    return <Square value={`${index}`} />;
  }

  renderRow(row: number) {
    return (
      <div key={row} className="board-row">
        {[...new Array(3).keys()].map((col) => {
          return this.renderSquare(row * 3 + col);
        })}
      </div>
    );
  }

  render() {
    return (
      <>
        {[...new Array(3).keys()].map((row) => {
          return this.renderRow(row);
        })}
      </>
    );
  }
}

export default Board;
