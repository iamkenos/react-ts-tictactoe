import { MoveHistoryProps } from "./types";

export default function MoveHistory(props: MoveHistoryProps) {
  const { history, onClick } = props;
  return (
    <>
      {history.map((squares, moveIndex) => {
        let description;
        if (moveIndex > 0) {
          description = "Go to move #" + moveIndex;
        } else {
          description = "Go to game start";
        }

        return (
          <li key={moveIndex}>
            <button onClick={() => onClick(moveIndex)}>{description}</button>
          </li>
        );
      })}
    </>
  );
}
