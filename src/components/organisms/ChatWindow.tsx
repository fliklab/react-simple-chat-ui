import React from "react";
import ChatBubble from "../molecules/ChatBubble";

// Message 객체의 타입을 정의합니다.
interface Message {
  avatarSrc: string;
  username: string;
  message: string;
  align?: "left" | "right"; // ChatBubbleProps의 align과 동일하게 optional로 설정
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          avatarSrc={msg.avatarSrc}
          username={msg.username}
          message={msg.message}
          align={msg.align} // msg 객체에 align이 있으면 전달, 없으면 ChatBubble의 기본값(left) 사용
        />
      ))}
    </div>
  );
};

export default ChatWindow;
