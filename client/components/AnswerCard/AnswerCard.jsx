import styles from "../Card/Card.module.css";

let AnswerCard = ({ deckArr, cardIndex, setIsAnswer, handleClick }) => {
  return (
    <>
      <p className={styles["card-answer"]}>{deckArr[cardIndex].answer}</p>
      <div className={styles["response-container"]}>

        <img
          className={styles["wrong-icon"]}
          src="/wrong-icon.svg"
          onClick={handleClick}
        />
        <img
          className={styles["correct-icon"]}
          src="/correct-icon.svg"
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default AnswerCard;
