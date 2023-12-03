import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";
import Deck from "../Deck/Deck.jsx";
import Card from "../Card/Card.jsx";

const MainContent = ({ currentView, decks, handleDeckClick, cardArr, handleView, deckPercentages, handleCorrectAnswer, handleWrongAnswer}) => {

  const changeContent = () => {
    switch (currentView) {
      case "about":
        return <About />;
      case "home":
        return <Home />;
      case "decks":
        return <Deck decks={decks} handleDeckClick={handleDeckClick} deckPercentages={deckPercentages} />;
      case "card":
        return <Card decks={decks} cardArr={cardArr} handleView={handleView} handleCorrectAnswer={handleCorrectAnswer} handleWrongAnswer={handleWrongAnswer} />;
      default:
        return <Home />;
    }
  };

  return changeContent();
};

export default MainContent;
