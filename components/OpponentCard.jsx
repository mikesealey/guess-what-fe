// import { useState } from "react";

import { OpponentContext } from "@/contexts/OpponentObject";
import { useContext } from "react";

export default function OpponentCard() {
  const { opponentObject, setOpponentObject } = useContext(OpponentContext);
  console.log(opponentObject.isFriendly, "<<<<<<<>>><<");

  return (
    <div className="opponentcard">
      <img
        className="alien-planet"
        src={`assets/alien-layers/planet-${opponentObject.planet}.png`}
      />
      <img
        className="alien-body"
        src={`assets/alien-layers/${opponentObject.body}.png`}
      />
      <img
        className="alien-eyes"
        src={`assets/alien-layers/eyes-${opponentObject.eyeColour}.png`}
      />

      <img
        className="alien-mouth"
        src={`assets/alien-layers/mouth-${
          opponentObject.isFriendly ? "friendly" : "unfriendly"
        }.png`}
      />
      {opponentObject.horns ? (
        <img
          className="alien-horns"
          src={`assets/alien-layers/horns-${opponentObject.horns}.png`}
        />
      ) : null}
      {opponentObject.hasAntenna ? (
        <img
          className="alien-antenna"
          src={"assets/alien-layers/antenna.png"}
        />
      ) : null}

      {/* <UserStats activeAlienCounter={activeAlienCounter}/> */}
    </div>
  );
}
