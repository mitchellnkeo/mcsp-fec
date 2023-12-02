import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles["about-box"]}>
      <h1>About Galvanize Vocab</h1>
      <p>
        The brilliant minds at Operation Level Up, fueled by caffeine and the
        occasional snack-induced brainstorm, didn't just stop at crafting your
        run-of-the-mill flashcard app. Oh no! They took it up a notch and
        decided, "Hey, let's sprinkle some programming magic in there!"
      </p>
      <p>
        These students are not just coding a Quizlet look-alike; they're on a
        mission to turn every coding novice into a programming pro, one
        flashcard at a time. It's like they looked at traditional study methods
        and said, "Boring! Let's make learning to code as fun as trying to
        explain memes to our grandparents."
      </p>
    </div>
  );
};

export default About;
