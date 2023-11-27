import React, { useEffect, useState } from "react";

const App = () => {
  const [decks, setDecks] = useState([]);

  const fetchDecks = () => {
    fetch("/api/decks")
      .then((res) => res.json())
      .then((decks) => {
        setDecks(decks);
      })
      .catch((error) => console.error("Error fetching :", error));
  };

  useEffect(() => {
    fetchDecks();
  }, []);
  console.log(decks);

  return (
    <div>
      {decks.map((deck) => (
        <span className="deck" key={deck.id}>
          {deck.description}
        </span>
      ))}
    </div>
  );
};

export default App;
