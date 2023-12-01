import { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ deckArr }) => {
  const [cardIndex, setCardIndex] = useState(0);

  let deckCount = deckArr.length;

  let handleClick = () => {
    if (cardIndex < deckCount - 1) setCardIndex(cardIndex + 1);
  };

  return (
    <div className={styles.card}>
      <p>{deckArr[cardIndex].question}</p>
      <br />
      <p>{deckArr[cardIndex].answer}</p>
      {/* <p>id: {deckArr[cardIndex].id}</p> */}
      <button className={styles["answer-button"]} onClick={handleClick}>
        REVEAL ANSWER
      </button>
    </div>
  );
};

export default Card;

/* 
            //   deckArr.map((card, index) => (
        //     <div
        //       key={`card${card.id}`}
        //     >
        //       <p>{card.question}</p>
        //     </div>
        //   )))


        */
