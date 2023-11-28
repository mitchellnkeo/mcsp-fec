import React, { useEffect, useState } from "react";
import "../app.css";
import Decks from "./Decks";
import NavigationButtons from "./NavigationButtons";
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
    <div>
      <div id="header">
        <header>
          <NavigationButtons onContentChange={handleContentChange} />
        </header>
      </div>
      <div id="main-content">
        <div className="content-container">
          {currentContent === "home" && (
            <div>
              <Home />
            </div>
          )}
          {currentContent === "about" && (
            <div>
              <About />
            </div>
          )}
          {currentContent === "decks" && (
            <div>
              <Decks decks={decks} fetchDecks={fetchDecks} />
            </div>
          )}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default App;
