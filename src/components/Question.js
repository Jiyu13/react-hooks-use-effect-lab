import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  // Deliverable 1: 
  // create a useEffect, use setTimeout to run a CB after 1s
  // CB update timeRemaining by decreasing 1 each second
  // pass timeRemaining into 2nd dependency
  useEffect(() => {
    setTimeout(() => {setTimeRemaining(timeRemaining - 1)}, 1000);
    
    // Diliverable 2: use cleanup function for useEffect
    // reset timeRemaing to 10 for next question when it hits 0
    // call onAnswer callback prop with param "false"
    return function cleanup() {
      if ( timeRemaining === 0) {
        setTimeRemaining(10)
        onAnswered(false)
      }
    }
  
  }, [timeRemaining])


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
