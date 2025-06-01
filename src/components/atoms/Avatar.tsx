import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ borderRadius: "50%", width: "40px", height: "40px" }}
    />
  );
};

export default Avatar;
