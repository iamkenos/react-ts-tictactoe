import Square from "../Square/Square";
import "./styles.css";

export default function Board() {
  function renderSquare(index: number) {
    return (
      <>
        <Square value={`${index}`} />
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
