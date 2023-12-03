import styles from "../Card/Card.module.css";

let QuestionCard = ({ cardArr, cardIndex }) => {
  return (
    <div className={styles["card-content-group"]}>
    <div className={styles["card-designator"]}>Q</div>
    <p className={styles["card-question"]}>{cardArr[cardIndex].question}</p>
    <div className={styles["card-designator"]}></div>
    </div>
  );
};

export default QuestionCard;
