import React, { useEffect, useState } from "react";

import Navigation from "./Navigation/Navigation.jsx";
import About from "./About";

import Home from "./Home/Home.jsx";
import Decks from "./Decks";

import "../app.css";

//import Home from "./Home";
import Question from "./Question";
import Answer from "./Answer";

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
      <div id="main-content">
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
          {currentContent === "question" && (
            <div className="reveal-box">
              <Question />
              <button className="reveal-button">REVEAL ANSWER</button>
            </div>
          )}
          {currentContent === "answer" && (
            <div className="answer-box">
              <Answer />
              <button className="answer-button-right">YOUR_TEXT_HERE</button>
            </div>
          )}
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default App;
