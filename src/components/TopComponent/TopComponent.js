import React from "react";
import topComponentBackground from "../../assets/topComponentBackground.png";
const TopComponent = ({ text }) => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${topComponentBackground})`,
        height: "500px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        className="display-3 position-absolute "
        style={{
          color: "white",
          letterSpacing: "10px",
          fontWeight: "200",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TopComponent;
