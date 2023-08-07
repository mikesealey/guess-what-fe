import React, { useEffect, useState, useContext } from "react";
import { UserStatsContext } from "@/contexts/UserStats";

export default function Timer({ isGameFinished }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const { statsObject, setStatsObject } = useContext(UserStatsContext)

  let timer;

  useEffect(() => {
    if (isGameFinished) {
      clearInterval(timer)
      const currentStats = { ...statsObject }
      currentStats.minutes = minutes
      currentStats.seconds = seconds
      setStatsObject(currentStats)
    } else {
      setSeconds(0);
      setMinutes(0);
    }
  }, [isGameFinished])

  useEffect(() => {
    if (!isGameFinished) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="timer">
      <h1>Timer</h1>
      <h2>
        {String(minutes).length < 2 && 0}
        {minutes}:{String(seconds).length < 2 && 0}
        {seconds}
      </h2>
    </div>
  );
}
