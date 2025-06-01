import React from "react";
import { render } from "@testing-library/react";
import Username from "./Username";

describe("Username Component", () => {
  it("renders correctly with given name", () => {
    const { getByText } = render(<Username name="Test User" />);
    const usernameElement = getByText("Test User");
    expect(usernameElement).toBeInTheDocument();
  });
});
