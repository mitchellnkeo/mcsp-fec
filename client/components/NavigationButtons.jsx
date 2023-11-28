import React from "react";

const NavigationButtons = ({ onContentChange }) => {
  return (
    <div>
      <button onClick={() => onContentChange("home")}>Home</button>
      <button onClick={() => onContentChange("about")}>About</button>
      <button onClick={() => onContentChange("decks")}>Decks</button>
    </div>
  );
};

export default NavigationButtons;
