import styles from "./Navigation.module.css";

const Navigation = ({ handleView }) => {


  return (
    <div className={styles["nav-buttons"]}>
      <button onClick={() => handleView("decks")}>DECKS</button>
      <button onClick={() => handleView("home")}>HOME</button>
      <button onClick={() => handleView("about")}>ABOUT</button>
    </div>
  );
};

export default Navigation;
