import AlienCard from './AlienCard';

export default function Gameboard({ alienObjects, setAlienObjects }) {
  return (
    <div className="gameboard">
      {alienObjects.map((alien) => {
        return (
          <AlienCard
            alien={alien}
            alienObjects={alienObjects}
            setAlienObjects={setAlienObjects}
            key={alien._id}
          />
        );
      })}
    </div>
  );
}
