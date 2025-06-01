import React from "react";
import { render, screen } from "@testing-library/react";
import ChatBubble from "./ChatBubble";

// Mock Atoms 컴포넌트들
// 실제 Avatar, Username, MessageText, DefaultAvatar 컴포넌트의 내부 구현은 테스트하지 않고,
// 해당 컴포넌트들이 올바른 props로 호출되는지만 확인하거나, 간단한 placeholder를 렌더링하도록 mock 처리합니다.

jest.mock("../atoms/Avatar", () => (props: { src: string; alt: string }) => (
  <img data-testid="avatar" src={props.src} alt={props.alt} />
));
jest.mock("../atoms/Username", () => (props: { name: string }) => (
  <div data-testid="username">{props.name}</div>
));
jest.mock("../atoms/MessageText", () => (props: { text: string }) => (
  <div data-testid="message-text">{props.text}</div>
));
jest.mock("../atoms/DefaultAvatar", () => () => (
  <div data-testid="default-avatar">Default Avatar</div>
));

describe("ChatBubble Component", () => {
  const defaultProps = {
    username: "Test User",
    message: "This is a test message.",
  };

  test("renders username and message correctly", () => {
    render(<ChatBubble {...defaultProps} avatarSrc="test.png" />);
    expect(screen.getByText(defaultProps.username)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.message)).toBeInTheDocument();
  });

  test("renders with left alignment by default and shows avatar on left", () => {
    const { container } = render(
      <ChatBubble {...defaultProps} avatarSrc="test.png" />
    );
    // align="left" (기본값)일 때 justify-content: flex-start
    expect(container.firstChild).toHaveStyle("justify-content: flex-start");
    // align="left"일 때 Avatar가 먼저 나오고, 그 다음에 텍스트 컨테이너가 나옴
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar").nextSibling).toHaveTextContent(
      defaultProps.username
    );
  });

  test("renders with right alignment and shows avatar on right", () => {
    const { container } = render(
      <ChatBubble {...defaultProps} avatarSrc="test.png" align="right" />
    );
    // align="right"일 때 justify-content: flex-end
    expect(container.firstChild).toHaveStyle("justify-content: flex-end");
    // align="right"일 때 텍스트 컨테이너가 먼저 나오고, 그 다음에 Avatar가 나옴
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar").previousSibling).toHaveTextContent(
      defaultProps.username
    );
  });

  test("renders Avatar when avatarSrc is provided", () => {
    render(<ChatBubble {...defaultProps} avatarSrc="user-avatar.jpg" />);
    const avatarImage = screen.getByTestId("avatar") as HTMLImageElement;
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage.src).toContain("user-avatar.jpg");
    expect(avatarImage.alt).toBe(defaultProps.username);
    expect(screen.queryByTestId("default-avatar")).not.toBeInTheDocument();
  });

  test("renders DefaultAvatar when avatarSrc is not provided", () => {
    render(<ChatBubble {...defaultProps} />); // avatarSrc를 제공하지 않음
    expect(screen.getByTestId("default-avatar")).toBeInTheDocument();
    expect(screen.queryByTestId("avatar")).not.toBeInTheDocument();
  });

  test("renders DefaultAvatar when avatarSrc is an empty string", () => {
    render(<ChatBubble {...defaultProps} avatarSrc="" />);
    expect(screen.getByTestId("default-avatar")).toBeInTheDocument();
    expect(screen.queryByTestId("avatar")).not.toBeInTheDocument();
  });

  // 스타일 관련 테스트는 좀 더 구체적으로 CSS 클래스나 특정 스타일 속성을 확인할 수 있습니다.
  // 예: 오른쪽 정렬 시 메시지 버블 배경색상 확인
  test("applies correct background color for right-aligned bubble", () => {
    render(<ChatBubble {...defaultProps} avatarSrc="test.png" align="right" />);
    // Username과 MessageText를 포함하는 텍스트 컨테이너를 찾습니다.
    const textContainer = screen.getByText(defaultProps.username).parentElement;
    expect(textContainer).toHaveStyle("background-color: #007bff"); // 오른쪽 정렬 시 파란색 배경
    expect(textContainer).toHaveStyle("color: #fff"); // 오른쪽 정렬 시 흰색 글자
  });

  test("applies correct background color for left-aligned bubble", () => {
    render(<ChatBubble {...defaultProps} avatarSrc="test.png" align="left" />);
    const textContainer = screen.getByText(defaultProps.username).parentElement;
    expect(textContainer).toHaveStyle("background-color: #f0f0f0"); // 왼쪽 정렬 시 회색 배경
    expect(textContainer).toHaveStyle("color: #000"); // 왼쪽 정렬 시 검은색 글자
  });
});
