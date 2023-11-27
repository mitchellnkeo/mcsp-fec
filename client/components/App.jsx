import React, { useEffect, useState } from "react";

const App = () => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("/decks")
      .then((res) => res.json())
      .then((decks) => {
        setDecks(decks);
      });
  }, []);

  return (
    <main>
      {decks.map((deck) => (
        <span className="deck" key={deck.id}>
          {deck.description}
        </span>
      ))}
      <p>
        Hello, I've been trying to reach you about your vehicles extended
        warranty
      </p>
      <p>
        Hello, I've been trying to reach you about your vehicles extended
        warranty
      </p>
      <p>
        Hello, I've been trying to reach you about your vehicles extended
        warranty. Radda radda Radda radda.
      </p>
    </main>
  );
};

export default App;
