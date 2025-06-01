import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ borderRadius: "50%", width: "40px", height: "40px" }}
    />
  );
};

export default Avatar;
