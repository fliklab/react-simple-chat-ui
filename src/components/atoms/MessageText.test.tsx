import React from "react";
import { render } from "@testing-library/react";
import MessageText from "./MessageText";

describe("MessageText Component", () => {
  it("renders correctly with given text", () => {
    const { getByText } = render(<MessageText text="Hello, World!" />);
    const messageTextElement = getByText("Hello, World!");
    expect(messageTextElement).toBeInTheDocument();
  });
});
