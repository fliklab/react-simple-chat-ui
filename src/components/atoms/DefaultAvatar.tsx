import React from "react";

const DefaultAvatar: React.FC<{
  width?: number;
  height?: number;
  className?: string;
}> = ({ width = 40, height = 40, className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Default user avatar"
  >
    <circle cx="50" cy="50" r="50" fill="#cccccc" />
    <path
      d="M50 60c-11 0-20 9-20 20v10h40v-10c0-11-9-20-20-20zm0-50c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"
      fill="#ffffff"
    />
  </svg>
);

export default DefaultAvatar;
