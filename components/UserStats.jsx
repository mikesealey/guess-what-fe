"use client";

import { Score } from "./Score";
import Timer from "./Timer";

export default function UserStats( {activeAlienCounter} ) {
  return (
    <div className="user-stats">
      <Timer />
      <Score />
      <div className="aliens-left">
        <h1> {activeAlienCounter} aliens left</h1>
      </div>
    </div>
  );
}
