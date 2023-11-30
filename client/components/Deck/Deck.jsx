import React, { useEffect, useState } from "react";
import styles from "./Deck.module.css";
import Question from "../Question.jsx";

const Deck = ({ decks }) => {
  console.log("decks", decks);
  const [isSelected, setIsSelected] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleDeckClick = (deckID) => {
    fetch(`/api/deck/${deckID}`)
      .then((res) => res.json())
      .then((data) => {
        setIsSelected(true);
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching deck:", error));
  };

  return (
    <div className={styles["container-style"]}>
      {decks.map((deck, index) => (
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

/*
    {isSelected ? (
        <Question flashcards={questions.flashcards} />
      ) : (
        <main>{renderDeckBoxes()}</main>
      )}
      */
export default Deck;
