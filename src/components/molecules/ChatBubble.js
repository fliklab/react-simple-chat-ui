import React from "react";
import Avatar from "../atoms/Avatar";
import Username from "../atoms/Username";
import MessageText from "../atoms/MessageText";

const ChatBubble = ({ avatarSrc, username, message }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <Avatar src={avatarSrc} alt={username} />
      <div style={{ marginLeft: "10px" }}>
        <Username name={username} />
        <MessageText text={message} />
      </div>
    </div>
  );
};

export default ChatBubble;
