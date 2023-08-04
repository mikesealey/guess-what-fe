import { useState, useContext } from "react";
import { UserStatsContext } from "@/contexts/UserStats";

export const Score = () => {
  const { statsObject, setStatsObject } = useContext(UserStatsContext)

  return (
    <div className="score">
      <p>Score: {statsObject.score}</p>
    </div>
  );
};
