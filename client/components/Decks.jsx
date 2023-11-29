import React, { useEffect, useState } from "react";
import styles from "./deck.module.css";

const Decks = () => {
  // State being used for the decks rendering on the Decks page
  const [decks, setDecks] = useState([]);

  const [questions, setQuestions] = useState([])

  // HANDLER FOR SPECIFIC DECK ID
  // 
  const handleDeckClick = (deckNumber) => {
    fetch(`/api/deck/${deckNumber}`)
      .then((response) => response.json())
      .then((data) => {
      setQuestions(data)})
      .catch((error) => console.error("Error fetching deck:", error));
  };

  const renderDeckBoxes = () => {
    return decks.map((deck, index) => (
      <div
        key={`deck${deck.id}`}
        className={styles["deck-box"]}
        onClick={() => handleDeckClick(deck.id)}
      >
        {`Deck ${deck.id}`}
        <p>{deck.description}</p>
      </div>
    ));
  };
  
  const containerStyle = {
    textAlign: "center",
  };
  
  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = () => {
    fetch("/api/decks")
      .then((res) => res.json())
      .then((decks) => {
        setDecks(decks);
      })
      .catch((error) => console.error("Error fetching decks:", error));
  };

  return (
    <div style={containerStyle}>
      <main>{renderDeckBoxes()}</main>
    </div>
  );
};
export default Decks;
