import styles from "../Card/Card.module.css";

let AnswerCard = ({ cardArr, cardIndex, handleCorrectClick, handleWrongClick }) => {

  return (
    <>
      <p className={styles["card-answer"]}> {cardArr[cardIndex].answer}</p>
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
    </>
  );
};

export default AnswerCard;

