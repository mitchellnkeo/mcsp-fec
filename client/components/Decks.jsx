import React, { useEffect, useState } from "react";

const Decks = () => {
  const [decks, setDecks] = useState([]);

  const handleDeckClick = (deckNumber) => {
    fetch(`/api/decks/${deckNumber}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching deck:", error));
  };

  const renderDeckBoxes = () => {
    const deckBoxes = [];
    const rows = 3;
    const columns = 4;

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        const deckIndex = (i - 1) * columns + j - 1;
        const deck = deckIndex < decks.length ? decks[deckIndex] : null;

        const deckBoxStyle = {
          margin: "10px",
          cursor: "pointer",
          width: "400px",
          height: "175px",
          backgroundColor: "lightblue",
          display: "inline-block",
        };

        deckBoxes.push(
          <div
            key={deck ? `deck${deck.id}` : `emptyDeck${deckIndex}`}
            className="deck-in-the-box"
            style={{
              ...deckBoxStyle,
              marginLeft: j > 1 ? "10px" : "0",
            }}
            onClick={() => handleDeckClick(deck ? deck.id : null)}
          >
            {deck ? `Deck ${deck.id}` : `Empty Deck ${deckIndex + 1}`}
            {deck && <p>{deck.description}</p>}{" "}
            {/* Add this line for deck description */}
          </div>
        );
      }
    }

    return deckBoxes;
  };

  const containerStyle = {
    marginTop: "200px",
    textAlign: "center",
  };

  useEffect(() => {
    fetchDecks(); // Call fetchDecks function within the component
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
