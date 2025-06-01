import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Avatar from "./Avatar";

test("renders Avatar component with correct src and alt", () => {
  const { getByAltText } = render(
    <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
  );
  const imgElement = getByAltText(/User Avatar/i);
  expect(imgElement).toHaveAttribute("src", "https://via.placeholder.com/40");
});
