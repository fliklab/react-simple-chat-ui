import React from "react";

interface MessageTextProps {
  text: string;
}

const MessageText: React.FC<MessageTextProps> = ({ text }) => {
  return <p style={{ margin: "0" }}>{text}</p>;
};

export default MessageText;
