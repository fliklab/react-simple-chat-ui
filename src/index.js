import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/atoms/Avatar";
import Username from "./components/atoms/Username";
import MessageText from "./components/atoms/MessageText";
import ChatBubble from "./components/molecules/ChatBubble";

const App = () => {
  return (
    <div>
      <ChatBubble
        avatarSrc="https://via.placeholder.com/40"
        username="John Doe"
        message="Hello, this is a test message!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
