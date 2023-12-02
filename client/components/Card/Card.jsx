import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import QuestionCard from "../QuestionCard/QuestionCard.jsx";
import AnswerCard from "../AnswerCard/AnswerCard.jsx";

const Card = ({ deckArr, handleView, handleCorrectAnswer, handleWrongAnswer, deckPercentages} ) => {

  const [cardIndex, setCardIndex] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);

  useEffect(() => {
    console.log("deckPercentages")
  }, [deckPercentages]);


  let handleCorrectClick = () => {  

    if (cardIndex === 0){
      // console.log("local storage", localStorage);
      if (localStorage.getItem(`deck${deckArr[0]['deck_id']}`) != null)
      localStorage.setItem(`deck${deckArr[0]['deck_id']}`, 0);
    }

    //handles submission,  has not correlation to correct or wrong answer
    handleCorrectAnswer(deckArr.at(-1)["deck_id"]);

    if (cardIndex < deckArr.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsAnswer(false);
    } else {
      handleView("decks");
    }
  };
  // console.log("local storage", localStorage);


  let handleWrongClick = () => {

    if (cardIndex === 0){
        // console.log("local storage", localStorage);
      if (localStorage.getItem(`deck${deckArr[0]['deck_id']}`) != null)
      localStorage.setItem(`deck${deckArr[0]['deck_id']}`, 0);
      handleWrongAnswer(deckArr.at(-1)["deck_id"])
    }

    

    if (cardIndex < deckArr.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsAnswer(false);
    } else {
      handleView("decks");
    }
  };






  return (
    <div className={styles["card-container"]}>
      <div>DECK TITLE</div>
      <div className={styles["card"]}>
        {isAnswer ? (

          <AnswerCard
            deckArr={deckArr}
            cardIndex={cardIndex}
            handleCorrectClick={handleCorrectClick}
            handleWrongClick={handleWrongClick}
          />
        ) : (

          <QuestionCard
            deckArr={deckArr}
            cardIndex={cardIndex}
            setIsAnswer={setIsAnswer}
          />

        )}
      </div>
    </div>
  );
};

export default Card;
