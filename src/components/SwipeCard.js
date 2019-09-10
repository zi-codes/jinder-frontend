import React from "react";

const cardStyles = {
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  top: 0
};

const SwipeCard = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default SwipeCard;
