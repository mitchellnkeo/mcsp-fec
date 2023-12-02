import styles from "../Card/Card.module.css";

let QuestionCard = ({ cardArr, cardIndex, setIsAnswer }) => {
  return (
    <>
      <p className={styles["card-question"]}>{cardArr[cardIndex].question}</p>

      <div className={styles["response-container"]}>
        <button
          className={styles["reveal-answer-button"]}
          onClick={() => setIsAnswer(true)}
        >
          REVEAL ANSWER
        </button>
      </div>
    </>
  );
};

export default QuestionCard;
