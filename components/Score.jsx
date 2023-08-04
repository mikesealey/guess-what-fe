import { useState, useContext } from "react";
import { UserStatsContext } from "@/contexts/UserStats";

export const Score = () => {
  const [score, setScore] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);
  const { statsObject, setStatsObject } = useContext(UserStatsContext)
  

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
    <div className="score">
      <p>Score: {statsObject.score}</p>
      {/* <button onClick={handleScore} disabled={hasGuessed}>
        Test
      </button>
      <button
        onClick={() => {
          reset(hasGuessed);
        }}
      >
        Reset
      </button> */}
    </div>
  );
};
