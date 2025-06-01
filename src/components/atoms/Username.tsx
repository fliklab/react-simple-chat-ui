import React from "react";

interface UsernameProps {
  name: string;
}

const Username: React.FC<UsernameProps> = ({ name }) => {
  return <span style={{ fontWeight: "bold" }}>{name}</span>;
};

export default Username;
