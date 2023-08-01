import { useState } from "react";

export const Score = () => {
  const [score, setScore] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);

  function handleScore() {
    setScore(score + 1);
    setHasGuessed(true);
  }

  function reset(val) {
    if (val) {
      setHasGuessed(false);
    } else {
      setHasGuessed(true);
    }
  }

  return (
    <>
      <p>Score: {score}</p>
      <button onClick={handleScore} disabled={hasGuessed}>
        Test
      </button>
      <button
        onClick={() => {
          reset(hasGuessed);
        }}
      >
        Reset
      </button>
    </>
  );
};
