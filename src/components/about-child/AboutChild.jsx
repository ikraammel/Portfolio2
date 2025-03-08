import React from "react";

const AboutChild = ({ title, alt, src, p }) => {
  return (
    <div className="details-container">
      <img src={src} alt={alt} className="icon" />
      <h3>{title}</h3>
      <p>{p}</p>
    </div>
  );
};

export default AboutChild;
