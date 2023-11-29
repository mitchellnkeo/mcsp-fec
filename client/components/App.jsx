import React, { useEffect, useState } from "react";
import "../app.css";
import Decks from "./Decks";
import Navigation from "./Navigation";
import About from "./About";
import Home from "./Home";

const App = () => {
  const [decks, setDecks] = useState([]);
  const [currentContent, setCurrentContent] = useState("home");

  const fetchDecks = () => {
    fetch("/api/decks")
      .then((res) => res.json())
      .then((decks) => {
        setDecks(decks);
      })
      .catch((error) => console.error("Error fetching:", error));
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  const handleContentChange = (content) => {
    // Content based on the button click
    setCurrentContent(content);
  };

  return (
    <>
      <header>
        <Navigation onContentChange={handleContentChange} />
      </header>

      <div className="content-container">
        <div className="galvanize-vocab-graphic">
          <img src="Galvanize_logo.svg" />
          <img src="Vocab_logo.svg" />
        </div>
        {currentContent === "home" && <Home />}
        {currentContent === "about" && <About />}
        {currentContent === "decks" && (
          <Decks decks={decks} fetchDecks={fetchDecks} />
        )}
      </div>
      <footer></footer>
    </>
  );
};

export default App;
