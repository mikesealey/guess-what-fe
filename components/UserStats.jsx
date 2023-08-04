"use client";

import { Score } from "./Score";
import Timer from "./Timer";

export default function UserStats({ alienObjects }) {
  // console.log(alienObjects, "<<<<<<<");
  let activeAlienCounter = alienObjects.filter((alien) => {
    return alien.isActive === true;
  });
  return (
    <div className="user-stats">
      <Timer />
      <div className="alien-stats">
        <Score />
        <div className="aliens-left">
          <h1>Aliens left: {activeAlienCounter.length} </h1>
        </div>
      </div>
    </div>
  );
}
