import type { SquareProps } from "./types";
import "./styles.css";

export default function Square(props: SquareProps) {
  const { value, onSquareClick } = props;
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
