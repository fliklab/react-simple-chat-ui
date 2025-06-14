import React, { memo } from "react";
import Avatar from "../atoms/Avatar";
import Username from "../atoms/Username";
import MessageText from "../atoms/MessageText";
import DefaultAvatar from "../atoms/DefaultAvatar";

interface ChatBubbleProps {
  avatarSrc?: string;
  username: string;
  message: string;
  align?: "left" | "right";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  avatarSrc,
  username,
  message,
  align = "left",
}) => {
  const bubbleStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: align === "right" ? "flex-end" : "flex-start",
  };

  const textContainerStyle: React.CSSProperties = {
    marginLeft: align === "right" ? "0" : "10px",
    marginRight: align === "right" ? "10px" : "0",
    padding: "8px 12px",
    borderRadius: "15px",
    backgroundColor: align === "right" ? "#007bff" : "#f0f0f0",
    color: align === "right" ? "#fff" : "#000",
  };

  return (
    <div style={bubbleStyle} data-testid="chat-bubble" data-align={align}>
      {align !== "right" &&
        (avatarSrc ? (
          <Avatar src={avatarSrc} alt={username} />
        ) : (
          <DefaultAvatar />
        ))}
      <div style={textContainerStyle}>
        <Username name={username} />
        <MessageText text={message} />
      </div>
      {align === "right" &&
        (avatarSrc ? (
          <Avatar src={avatarSrc} alt={username} />
        ) : (
          <DefaultAvatar />
        ))}
    </div>
  );
};

export default memo(ChatBubble);
