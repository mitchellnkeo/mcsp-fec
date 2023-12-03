import styles from "../Card/Card.module.css";

let AnswerCard = ({ cardArr, cardIndex }) => {
  return (
    <div className={styles["card-content-group"]}>
      <div className={styles["card-designator"]}>A</div>
      <p className={styles["card-answer"]}> {cardArr[cardIndex].answer}</p>
      <div className={styles["card-designator"]}></div>
    </div>
  );
};

export default AnswerCard;
