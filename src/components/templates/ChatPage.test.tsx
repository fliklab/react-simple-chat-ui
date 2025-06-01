import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ChatPage from "./ChatPage";
import { I18nextProvider } from "react-i18next";
import i18n from "../../utils/i18n";
import { act } from "react";

// ChatWindow를 mock 처리합니다.
jest.mock("../organisms/ChatWindow", () => {
  const MockChatWindow = jest.fn((props) => (
    <div data-testid="chat-window">
      {props.messages.map((msg: any, index: number) => (
        <div key={index} data-testid="message-item">
          {msg.message}{" "}
          {/* 실제 ChatBubble의 message 내용을 표시하도록 mock 수정 */}
        </div>
      ))}
    </div>
  ));
  return MockChatWindow;
});

describe("ChatPage Component", () => {
  beforeEach(() => {
    (require("../organisms/ChatWindow") as jest.Mock).mockClear();
    i18n.changeLanguage("en");
  });

  it("renders and allows sending a message", async () => {
    const { getByPlaceholderText, getByText } = render(
      <I18nextProvider i18n={i18n}>
        <ChatPage />
      </I18nextProvider>
    );

    await waitFor(() =>
      expect(getByPlaceholderText("Type a message...")).toBeInTheDocument()
    );

    const inputElement = getByPlaceholderText("Type a message...");
    const sendButton = getByText("Send");

    fireEvent.change(inputElement, { target: { value: "New message" } });
    fireEvent.click(sendButton);

    expect(getByText("New message")).toBeInTheDocument();
  });

  test("renders, allows sending a message, and clears input", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ChatPage />
      </I18nextProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("chat-window")).toBeInTheDocument()
    );

    const inputElement = screen.getByPlaceholderText("Type a message...");
    const sendButton = screen.getByText("Send");

    fireEvent.change(inputElement, { target: { value: "New message" } });
    fireEvent.click(sendButton);

    // ChatWindow mock이 화면에 "New message"를 렌더링하는지 확인
    await waitFor(() =>
      expect(screen.getByText("New message")).toBeInTheDocument()
    );
    expect(inputElement).toHaveValue(""); // 입력 필드 초기화 확인
  });

  test("ChatWindow is called with initial messages and updates with new messages", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ChatPage />
      </I18nextProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("chat-window")).toBeInTheDocument()
    );

    const MockChatWindow = require("../organisms/ChatWindow") as jest.Mock;

    expect(MockChatWindow).toHaveBeenCalledTimes(1);
    const initialMessages = MockChatWindow.mock.calls[0][0].messages;
    expect(initialMessages.length).toBe(2);
    expect(initialMessages[0].message).toBe("Hello, this is a test message!");

    const inputElement = screen.getByPlaceholderText("Type a message...");
    const sendButton = screen.getByText("Send");
    fireEvent.change(inputElement, { target: { value: "Another new one" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      // ChatWindow가 리렌더링될 때 mock 함수가 다시 호출될 수도 있고, props만 변경될 수도 있습니다.
      // 여기서는 마지막 호출의 messages prop을 확인합니다.
      const lastCallArgs =
        MockChatWindow.mock.calls[MockChatWindow.mock.calls.length - 1][0];
      expect(lastCallArgs.messages.length).toBe(3);
      expect(lastCallArgs.messages).toEqual(
        expect.arrayContaining([
          ...initialMessages,
          expect.objectContaining({
            message: "Another new one",
            align: "right",
          }),
        ])
      );
    });
  });

  test("does not send an empty message or a message with only spaces", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ChatPage />
      </I18nextProvider>
    );
    await waitFor(() =>
      expect(screen.getByTestId("chat-window")).toBeInTheDocument()
    );

    const MockChatWindow = require("../organisms/ChatWindow") as jest.Mock;
    const initialMessages = JSON.parse(
      JSON.stringify(MockChatWindow.mock.calls[0][0].messages)
    ); // Deep copy

    const inputElement = screen.getByPlaceholderText("Type a message...");
    const sendButton = screen.getByText("Send");

    // 1. 빈 메시지 전송 시도
    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(sendButton);

    let lastCallArgs =
      MockChatWindow.mock.calls[MockChatWindow.mock.calls.length - 1][0];
    expect(lastCallArgs.messages).toEqual(initialMessages); // 메시지 목록 변경 없음

    // 2. 공백만 있는 메시지 전송 시도
    fireEvent.change(inputElement, { target: { value: "   " } });
    fireEvent.click(sendButton);

    lastCallArgs =
      MockChatWindow.mock.calls[MockChatWindow.mock.calls.length - 1][0];
    expect(lastCallArgs.messages).toEqual(initialMessages); // 메시지 목록 변경 없음
    expect(inputElement).toHaveValue("   "); // 입력 필드는 그대로 유지
  });

  test("shows ChatWindow after loading", async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ChatPage />
      </I18nextProvider>
    );
    // ChatWindow가 로드될 때까지 기다림 (ChatWindow mock의 data-testid 사용)
    await waitFor(() =>
      expect(screen.getByTestId("chat-window")).toBeInTheDocument()
    );
    // 추가적으로, ChatWindow가 로드된 후에는 "Loading..." 텍스트가 없어야 함 (만약 표시되었다면)
    // queryByText는 요소가 없으면 null을 반환하므로 not.toBeInTheDocument와 잘 맞음
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
