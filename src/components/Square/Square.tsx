import React from "react";
import type { SquareProps } from "./types";
import "./styles.css";

class Square extends React.Component<SquareProps> {
  private value: string;

  constructor(props: SquareProps) {
    super(props);
    this.value = props.value;
  }

  render() {
    return <button className="square">{this.value}</button>;
  }
}

export default Square;
