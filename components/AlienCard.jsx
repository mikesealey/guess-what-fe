export default function AlienCard({ alien }) {
  console.log(alien);
  return (
    <div className="aliencard">
      <img
        className="alien-body"
        src={`assets/alien-layers/body-${alien.skinColour}-${alien.skinTexture}.png`}
      />
      <img
        className="alien-eyes"
        src={`assets/alien-layers/eyes-${alien.eyeColour}-${alien.eyes}.png`}
      />
      <img
        className="alien-mouth"
        src={`assets/alien-layers/mouth-${
          alien.isFriendly ? 'friendly' : 'unfriendly-a'
        }.png`}
      />
      <img
        className="alien-horns"
        src={`assets/alien-layers/horns-${alien.horns}.png`}
      />
      {alien.hasAntenna ? (
        <img
          className="alien-antenna"
          src={'assets/alien-layers/antenna.png'}
        />
      ) : null}
    </div>
  );
}
