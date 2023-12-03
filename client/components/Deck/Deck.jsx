import React, { useEffect } from "react";
import styles from "./Deck.module.css";

const Deck = ({ decks, handleDeckClick, deckPercentages }) => {


  useEffect(() => {
  }, [deckPercentages, localStorage]);


console.log("decks from Deck", decks);

  return (
    <div className={styles["container-style"]}>
      {decks.map((deck) => (
        <div
          key={`deck${deck.id}`}
          className={styles["deck-box"]}
          onClick={() => handleDeckClick(deck.id)}
        >
        <p className={styles["deck-percentage-correct"]}> {deckPercentages[deck.id]}% </p>
          <p className={styles["deck-description"]}>{deck.description}</p>
        </div>
      ))}
      
    </div>
  );
};


export default Deck;