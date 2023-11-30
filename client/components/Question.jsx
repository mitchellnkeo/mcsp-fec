import React, { useState } from "react";
import "./question.modal.css";
import Answer from "./Answer";

const Question = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const handleRevealAnswer = () => {
    setRevealAnswer(true);
  };

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setRevealAnswer(false); // Reset revealAnswer when moving to the next question
    }
  };

  return (
    <div className="question-container">
      <h4 className="question-q">Q</h4>
      <div className="question-box">
        <p className="question-text">
          {flashcards && flashcards[currentCardIndex]
            ? revealAnswer
              ? flashcards[currentCardIndex].answer
              : flashcards[currentCardIndex].question
            : "Question not available"}
        </p>
      </div>
      {!revealAnswer && (
        <button className="reveal-button" onClick={handleRevealAnswer}>
          REVEAL ANSWER
        </button>
      )}
      {revealAnswer && (
        <button className="next-card-button" onClick={handleNextCard}>
          NEXT QUESTION
        </button>
      )}
      {revealAnswer && <Answer answer={flashcards[currentCardIndex].answer} />}
    </div>
  );
};

export default Question;
