import React, { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation.jsx";
import MainContent from "./MainContent/MainContent.jsx";
import "../app.css";

const App = () => {
  const [decks, setDecks] = useState([]);
  const [deckArr, setDeckArr] = useState([]);
  const [currentView, setCurrentView] = useState("home");
  const [deckPercentages, setDeckPercentages] = useState({})

  // console.log('local storage from app', localStorage)

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

//TODO:// clean up? same fetch

  useEffect(() => {
    // Retrieve the list of decks from our established database.
    fetch("/api/decks")
      .then((res) => res.json())
      .then((decks) => {
        // Initialize or reinitialize local storage keys with .forEach to go through the database decks. 
        decks.forEach((deck) => {
          // Set our key to the deck id, check to see if key exists by getItem and a conditional.
          const localStorageKey = `deck${deck.id}`;
          const existingData = localStorage.getItem(localStorageKey);
          if (!existingData) {
            localStorage.setItem(localStorageKey, 0);
          }
        });

        // Set initial values based on local storage, iterate through the fetch request, validate existingData, and update percentages accordingly
        const initialDeckValues = {};
        decks.forEach((deck) => {
          const localStorageKey = `deck${deck.id}`
          const existingData = localStorage.getItem(localStorageKey)
          // If data exists, parse and return it to an integer.
          initialDeckValues[deck.id] = existingData ? parseInt(existingData) : 0
        })
        // Set the State of percentages with values obtained from local storage.
        setDeckPercentages(initialDeckValues)
      })
      .catch((error) => console.error("You goof'd again, MITCHELL!:", error));
  }, [localStorage]);

  const updateDeckPercentage = (deckID, count) => {
    // This line will update the state of deckPercentages using the previous state

    console.log("*********************", count)
    setDeckPercentages((prevPercentages) => ({
      // I learned that we spread the previous state to make sure that we don't mutate it.
      ...prevPercentages,
      // Update the specific deckID with its new count value. 
      
      [deckID]: count,
    }))
  }
  
  const handleCorrectAnswer = (deckID) => {

    const localStorageKey = `deck${deckID}`;

    const currentCount = parseInt(localStorage.getItem(localStorageKey) || 0)

    const updatedCount = currentCount + 1;

    localStorage.setItem(localStorageKey, updatedCount);

    updateDeckPercentage(deckID, updatedCount);

  }


  const handleWrongAnswer = (deckID) => {
    updateDeckPercentage(deckID, 0);
  }

  
  const handleDeckClick = (deckID) => {

    fetch(`/api/deck/${deckID}`)
      .then((res) => res.json())
      .then((data) => {
        setDeckArr(data); /* setDeckArr*/
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
            handleView={handleView}
            handleDeckClick={handleDeckClick}
            deckArr={deckArr}
            deckPercentages={deckPercentages}
            handleCorrectAnswer={handleCorrectAnswer}  
            handleWrongAnswer={handleWrongAnswer}
          />
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default App;
