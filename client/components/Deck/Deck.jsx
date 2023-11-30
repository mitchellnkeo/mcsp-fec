import React, { useState } from "react";
import styles from "./Deck.module.css";
const Deck = ({ decks, handleDeckClick }) => {
  return (
    <div className={styles["container-style"]}>
      {decks.map((deck) => (
        <div
          key={`deck${deck.id}`}
          className={styles["deck-box"]}
          onClick={() => handleDeckClick(deck.id)}
        >
          {`Deck ${deck.id}`}
          <p>{deck.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Deck;
