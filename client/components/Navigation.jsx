import React from "react";

const Navigation = ({ onContentChange }) => {
  return (
    <div className="navigation-menu">
      <button onClick={() => onContentChange("about")}>ABOUT</button>
      <button onClick={() => onContentChange("home")}>HOME</button>
      <button onClick={() => onContentChange("decks")}>DECKS</button>
    </div>
  );
};

export default Navigation;
