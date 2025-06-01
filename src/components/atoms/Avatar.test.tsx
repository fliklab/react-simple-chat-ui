import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("renders correctly with given src and alt", () => {
    const { getByAltText } = render(
      <Avatar src="https://via.placeholder.com/40" alt="Test Avatar" />
    );
    const avatarElement = getByAltText("Test Avatar");
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/40"
    );
  });
});
