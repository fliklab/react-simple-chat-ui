import React from "react";
import { render, screen } from "@testing-library/react";
import ChatWindow, { Message } from "./ChatWindow";

// ChatBubble 컴포넌트를 mock 처리합니다.
jest.mock("../molecules/ChatBubble", () => {
  const MockChatBubble = jest.fn((props) => (
    <div data-testid="chat-bubble">
      <div data-testid="cb-username">{props.username}</div>
      <div data-testid="cb-message">{props.message}</div>
      {props.avatarSrc && (
        <img
          data-testid="cb-avatar"
          src={props.avatarSrc}
          alt={props.username}
        />
      )}
      <div data-testid="cb-align">{props.align || "left"}</div>
    </div>
  ));
  return MockChatBubble;
});

describe("ChatWindow Component", () => {
  const messages: Message[] = [
    {
      avatarSrc: "avatar1.png",
      username: "User1",
      message: "Hello!",
      align: "left",
    },
    {
      username: "User2", // avatarSrc가 없는 경우 (Message 인터페이스에서 optional이므로 유효)
      message: "Hi there!",
      align: "right",
    },
    {
      avatarSrc: "avatar3.png",
      username: "User3",
      message: "Another message.",
      // align이 없는 경우 (ChatBubble 내부 기본값 사용)
    },
  ];

  beforeEach(() => {
    // 각 테스트 전에 mock 함수의 호출 기록을 초기화합니다.
    (require("../molecules/ChatBubble") as jest.Mock).mockClear();
  });

  test("renders correctly with a list of messages and calls ChatBubble with correct props", () => {
    render(<ChatWindow messages={messages} />);

    const MockChatBubble = require("../molecules/ChatBubble") as jest.Mock;

    // ChatBubble이 messages 배열의 길이만큼 호출되었는지 확인
    expect(MockChatBubble).toHaveBeenCalledTimes(messages.length);

    // 각 ChatBubble 호출 시 전달된 props (첫 번째 인자) 확인
    messages.forEach((msg, index) => {
      const expectedProps = {
        avatarSrc: msg.avatarSrc,
        username: msg.username,
        message: msg.message,
        align: msg.align,
      };
      // MockChatBubble.mock.calls[index][0]은 index번째 호출의 첫 번째 인자(props)를 의미합니다.
      expect(MockChatBubble.mock.calls[index][0]).toEqual(
        expect.objectContaining(expectedProps)
      );

      // 화면에 렌더링된 내용도 간단히 확인 (mock 구현에 따라 다름)
      expect(screen.getAllByTestId("cb-username")[index]).toHaveTextContent(
        msg.username
      );
      expect(screen.getAllByTestId("cb-message")[index]).toHaveTextContent(
        msg.message
      );
    });
  });

  test("renders nothing or a placeholder when messages array is empty", () => {
    render(<ChatWindow messages={[]} />);
    // 메시지가 없을 때 ChatBubble이 호출되지 않는지 확인
    const MockChatBubble = require("../molecules/ChatBubble") as jest.Mock;
    expect(MockChatBubble).not.toHaveBeenCalled();

    // ChatBubble이 하나도 렌더링되지 않았는지 확인
    expect(screen.queryByTestId("chat-bubble")).not.toBeInTheDocument();
  });
});
