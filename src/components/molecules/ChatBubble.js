import React from "react";
import Avatar from "../atoms/Avatar";
import Username from "../atoms/Username";
import MessageText from "../atoms/MessageText";

const ChatBubble = ({ avatarSrc, username, message, align }) => {
  const bubbleStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: align === "right" ? "flex-end" : "flex-start",
  };

  return (
    <div style={bubbleStyle}>
      {align !== "right" && <Avatar src={avatarSrc} alt={username} />}
      <div
        style={{
          marginLeft: align === "right" ? "0" : "10px",
          marginRight: align === "right" ? "10px" : "0",
        }}
      >
        <Username name={username} />
        <MessageText text={message} />
      </div>
      {align === "right" && <Avatar src={avatarSrc} alt={username} />}
    </div>
  );
};

export default ChatBubble;
