import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  let homeParagraphString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor.`;

  return (
    <>
      <div className={styles["home-container"]}>
        <img className={styles["galvanize-guy-png"]} src="galvanize-dude.png" />

        <div className={styles["home-text-container"]}>
          <div className={styles["home-title"]}>
            Transforming <br /> Vocabulary Study
          </div>
          <div className={styles["home-paragraph"]}>{homeParagraphString}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
