import React from "react";
import ChatBubble from "../molecules/ChatBubble";

const ChatWindow = ({ messages }) => {
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
          align={msg.align || "left"}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
