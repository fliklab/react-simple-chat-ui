import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/atoms/Avatar";
import Username from "./components/atoms/Username";
import MessageText from "./components/atoms/MessageText";
import ChatBubble from "./components/molecules/ChatBubble";
import ChatWindow from "./components/organisms/ChatWindow";

const App = () => {
  const messages = [
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
  ];

  return (
    <div>
      <ChatWindow messages={messages} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
