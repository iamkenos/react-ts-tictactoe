import { render } from "@testing-library/react";
import Square from "./Square";

describe("Square Component", () => {
 let fragment: DocumentFragment;
  it("should render the square component", () => {
    givenRenderSquareComponent();
    thenSquareComponentSnapshotMatch();
  });

  function givenRenderSquareComponent() {
    const handleSquareClick = () => {};
    const { asFragment } = render(<Square value="" onSquareClick={handleSquareClick}/>);
    fragment = asFragment();
  }

  function thenSquareComponentSnapshotMatch() {
    expect(fragment).toMatchSnapshot();
  }
});
