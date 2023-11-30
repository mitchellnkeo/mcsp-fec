const NavigationButtons = ({ onContentChange }) => {
  return (
    <div className="menu-container">
      <button className="nav-button" onClick={() => onContentChange("home")}>
        HOME
      </button>
      <button className="nav-button" onClick={() => onContentChange("about")}>
        ABOUT
      </button>
      <button className="nav-button" onClick={() => onContentChange("decks")}>
        DECKS
      </button>
      <button
        className="nav-button"
        onClick={() => onContentChange("question")}
      >
        QUESTION
      </button>
    </div>
  );
};

export default NavigationButtons;
