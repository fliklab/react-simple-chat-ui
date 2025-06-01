import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/atoms/Avatar";
import Username from "./components/atoms/Username";
import MessageText from "./components/atoms/MessageText";

const App = () => {
  return (
    <div>
      <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
      <Username name="John Doe" />
      <MessageText text="Hello, this is a test message!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
