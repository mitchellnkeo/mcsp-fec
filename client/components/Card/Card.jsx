import { useState } from "react";
import styles from "./Card.module.css";
import QuestionCard from "../QuestionCard/QuestionCard.jsx";
import AnswerCard from "../AnswerCard/AnswerCard.jsx";

const Card = ({ deckArr, handleView }) => {
  
  const [cardIndex, setCardIndex] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);

  let handleClick = () => {
  
    if (cardIndex < deckArr.length - 1) {
      setCardIndex(cardIndex + 1);
      setIsAnswer(false);
    } else {
      handleView("decks");
    }

  };

  return (

    <div className={styles['card-container']}>
    <div>DECK TITLE</div>
    <div className={styles['card']}>

    { isAnswer ?  <AnswerCard deckArr={deckArr} cardIndex={cardIndex} setIsAnswer={setIsAnswer} handleClick={handleClick}/> : <QuestionCard deckArr={deckArr} cardIndex={cardIndex} setIsAnswer={setIsAnswer} />}

    </div>
   
    </div>
  );
};

export default Card;