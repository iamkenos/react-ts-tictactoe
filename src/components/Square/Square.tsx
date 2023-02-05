import type { SquareProps } from "./types";
import "./styles.css";

export default function Square(props: SquareProps) {
  return (
    <>
      <button className="square">{props.value}</button>
    </>
  );
}
