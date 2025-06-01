import React, { useState, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import { Message } from "../organisms/ChatWindow";

const ChatWindow = lazy(() => import("../organisms/ChatWindow"));

const ChatPage: React.FC = () => {
  const { t } = useTranslation();

  const [messages, setMessages] = useState<Message[]>([
    {
      avatarSrc: "",
      username: "John Doe",
      message: "Hello, this is a test message!",
      align: "left",
    },
    {
      avatarSrc: "",
      username: "Jane Smith",
      message: "Hi John, nice to meet you!",
      align: "left",
    },
  ]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        avatarSrc: "",
        username: "You",
        message: inputValue,
        align: "right",
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <ChatWindow messages={messages} />
      </Suspense>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          placeholder={"Type a message..."}
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
          {t("Send")}
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
