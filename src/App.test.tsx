import { render } from "@testing-library/react";
import App from "./App";

describe("Application", () => {
 let fragment: DocumentFragment;
  it("should render the app", () => {
    givenRenderApp();
    thenAppSnapshotMatch();
  });

  function givenRenderApp() {
    const { asFragment } = render(<App />);
    fragment = asFragment();
  }

  function thenAppSnapshotMatch() {
    expect(fragment).toMatchSnapshot();
  }
});