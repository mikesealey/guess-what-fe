import { useState } from "react";

export default function OpponentCard() {
  const [opponentObject, setOpponentObject] = useState({});

  opponentObject.planet = "";

  opponentObject.body = ""

  opponentObject.isFriendly = ""

  opponentObject.horns = ""

  opponentObject.hasAntenna = ""

  opponentObject.eyeColour = "" 
 

  return (
    <div className="opponentcard">
    

      <img className="alien-planet"
       src={`assets/alien-layers/planet-${opponentObject.planet}.png`}
     />
      <img className="alien-body"
        src={`assets/alien-layers/${opponentObject.body}.png`}
      />
     <img
        className="alien-eyes"
        src={`assets/alien-layers/eyes-${opponentObject.eyeColour}.png`}
      />
     <img
        className="alien-mouth"
        src={`assets/alien-layers/mouth-${
          opponentObject.isFriendly ? "friendly" : "unfriendly-a"
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
