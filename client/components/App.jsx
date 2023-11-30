import React, { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation.jsx";
import MainContent from "./MainContent/MainContent.jsx";
import "../app.css";

const App = () => {
  const [decks, setDecks] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [currentView, setCurrentView] = useState("home");

  let handleView = (view) => {
    setCurrentView(view);
  };

  const fetchDecks = () => {
    fetch("/api/decks")
      .then((res) => res.json())
      .then((decks) => {
        setDecks(decks);
      })
      .catch((error) => console.error("Error fetching:", error));
  };

  const handleDeckClick = (deckID) => {
    fetch(`/api/deck/${deckID}`)
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
        setCurrentView("card");
      })
      .catch((error) => console.error("Error fetching deck:", error));
  };

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <>
      <header>
        <Navigation handleView={handleView} />
      </header>
      <div id="main-content">
        <div className="content-container">
          <div className="galvanize-vocab-graphic">
            <img src="galvanize-logo.svg" />
            <img src="vocab-logo.svg" />
          </div>
          <MainContent
            currentView={currentView}
            decks={decks}
            handleDeckClick={handleDeckClick}
            cardData={cardData}
          />
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default App;
