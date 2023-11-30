import About from "../About.jsx";
import Home from "../Home/Home.jsx";
import Deck from "../Deck/Deck.jsx";
import Card from "../Card/Card.jsx";

const MainContent = ({ currentView, decks, handleDeckClick, cardData }) => {
  console.log(currentView);

  const changeContent = () => {
    switch (currentView) {
      case "about":
        return <About />;
      case "home":
        return <Home />;
      case "decks":
        return <Deck decks={decks} handleDeckClick={handleDeckClick} />;
      case "card":
        return <Card cardData={cardData} />;
      default:
        return <Home />;
    }
  };

  return changeContent();
};

export default MainContent;
