import React from "react";

import styles from "./Navigation.module.css";

const Navigation = ({ onContentChange }) => {
  return (
    <div className={styles["nav-buttons"]}>
      <button onClick={() => onContentChange("decks")}>DECKS</button>
      <button onClick={() => onContentChange("home")}>HOME</button>
      <button onClick={() => onContentChange("about")}>ABOUT</button>
    </div>
  );
};

export default Navigation;
