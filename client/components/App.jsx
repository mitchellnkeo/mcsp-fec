import React, { useEffect, useState } from "react";


import Navigation from "./Navigation/Navigation.jsx";
import About from "./About";
import Home from "./Home/Home.jsx";
import Decks from "./Decks";

import "../app.css";

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
          <img src="galvanize-logo.svg" />
          <img src="vocab-logo.svg" />
        </div>

         
        {currentContent === "about" && <About />}
        {currentContent === "home" && <Home />}
        {currentContent === "decks" && (
          <Decks decks={decks} fetchDecks={fetchDecks} />
        )}
      </div>
      <footer></footer>
    </>
  );
};

export default App;