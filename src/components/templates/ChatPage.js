import React, { useState } from "react";
import ChatWindow from "../organisms/ChatWindow";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      avatarSrc: "https://via.placeholder.com/40",
      username: "John Doe",
      message: "Hello, this is a test message!",
    },
    {
      avatarSrc: "https://via.placeholder.com/40",
      username: "Jane Smith",
      message: "Hi John, nice to meet you!",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          avatarSrc: "https://via.placeholder.com/40",
          username: "You",
          message: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <ChatWindow messages={messages} />
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            marginLeft: "10px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
