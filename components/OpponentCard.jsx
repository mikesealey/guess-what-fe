// import { useState } from "react";

import { OpponentContext } from '@/contexts/OpponentObject';
import { useContext } from 'react';

export default function OpponentCard() {
  const { opponentObject, setOpponentObject } = useContext(OpponentContext);
  // console.log(opponentObject.isFriendly, "<<<<<<<>>><<");

  const mouth = (
    <img
      className="alien-mouth"
      src={`assets/alien-layers/mouth-${
        !opponentObject.isFriendly ? 'unfriendly-a' : 'friendly'
      }.png`}
    />
  );

  function mouthRendering(prop, img) {
    if (prop !== undefined) {
      return img;
    }
  }
  function questionMark(obj, img) {
    if (Object.keys(obj).length === 0) {
      return img;
    }
  }

  const img = <h1 className="question-mark">???</h1>;

  return (
    <div className="opponentcard">
      {questionMark(opponentObject, img)}

      {opponentObject.planet ? (
        <img
          className="alien-planet"
          src={`assets/alien-layers/planet-${opponentObject.planet}.png`}
        />
      ) : null}
      {opponentObject.skinColour || opponentObject.skinTexture ? (
        <img
          className={`alien-body ${opponentObject.skinColour ? "" : "grayscale"}`}
          src={`assets/alien-layers/body-${opponentObject.skinColour ? opponentObject.skinColour : "green"}-${opponentObject.skinTexture ? opponentObject.skinTexture : "smooth"}.png`}
        />
      ) : null}
      {opponentObject.eyes ? (
        <img
        className={`alien-body ${opponentObject.eyeColour ? "" : "grayscale"}`}
          src={`assets/alien-layers/eyes-${opponentObject.eyeColour ? opponentObject.eyeColour : "red"}-${opponentObject.eyes}.png`}
        />
      ) : null}
      {mouthRendering(opponentObject.isFriendly, mouth)}

      {opponentObject.horns ? (
        <img
          className="alien-horns"
          src={`assets/alien-layers/horns-${opponentObject.horns}.png`}
        />
      ) : null}
      {opponentObject.hasAntenna ? (
        <img
          className="alien-antenna"
          src={'assets/alien-layers/antenna.png'}
        />
      ) : null}

      {/* <UserStats activeAlienCounter={activeAlienCounter}/> */}
    </div>
  );
}
