import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import QuestionCard from "../QuestionCard/QuestionCard.jsx";
import AnswerCard from "../AnswerCard/AnswerCard.jsx";

const Card = ({
  decks,
  cardArr,
  handleView,
  handleCorrectAnswer,
  handleWrongAnswer,
  deckPercentages,
}) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  useEffect(() => {}, [deckPercentages]);

  let handleCorrectClick = () => {
    setCurrentQuestion(currentQuestion + 1);

    if (cardIndex === 0) {
      if (localStorage.getItem(`deck${cardArr[0]["deck_id"]}`) != null)
        localStorage.setItem(`deck${cardArr[0]["deck_id"]}`, 0);
    }

    handleCorrectAnswer(
      cardArr.at(-1)["deck_id"],
      cardArr.length,
      currentQuestion
    );

    if (cardIndex < cardArr.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsAnswer(false);
    } else {
      handleView("decks");
    }
  };

  let handleWrongClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    if (cardIndex === 0) {
      if (localStorage.getItem(`deck${cardArr[0]["deck_id"]}`) != null)
        localStorage.setItem(`deck${cardArr[0]["deck_id"]}`, 0);
      handleWrongAnswer(
        cardArr.at(-1)["deck_id"],
        cardArr.length,
        currentQuestion
      );
    }

    if (cardIndex < cardArr.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsAnswer(false);
    } else {
      handleView("decks");
    }
  };

  let currentDeckID = cardArr[cardIndex]["deck_id"];
  let currentDeckDescription;

  for (let deck of decks) {
    if (deck.id === currentDeckID) {
      currentDeckDescription = deck.description;
    }
  }

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-count"]}>
        {" "}
        {currentQuestion} / {cardArr.length}
      </div>
      <div className={styles["card-header-container"]}>
        <div className={styles["card-header-deck-name"]}>
          {currentDeckDescription}
        </div>
      </div>
      <div className={styles["card"]}>
        {isAnswer ? (
          <AnswerCard
            cardArr={cardArr}
            cardIndex={cardIndex}
            handleCorrectClick={handleCorrectClick}
            handleWrongClick={handleWrongClick}
          />
        ) : (
          <QuestionCard
            cardArr={cardArr}
            cardIndex={cardIndex}
            setIsAnswer={setIsAnswer}
          />
        )}
      </div>

      {isAnswer ? (
        <div className={styles["response-container"]}>
          <img
            className={styles["wrong-icon"]}
            src="/wrong-icon.svg"
            onClick={handleWrongClick}
          />

          <img
            className={styles["correct-icon"]}
            src="/correct-icon.svg"
            onClick={handleCorrectClick}
          />
        </div>
      ) : (
        <div className={styles["response-container"]}>
          <button
            className={styles["reveal-answer-button"]}
            onClick={() => setIsAnswer(true)}
          >
            REVEAL ANSWER
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
