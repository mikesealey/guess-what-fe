import AlienCard from './AlienCard';

export default function Gameboard({ alienObjects, setAlienObjects }) {

  const alienNames = ["Zorkon", "Xyloph", "Velnar", "Qwixar", "Zyla", "Gorgon", "Xandria", "Vortek", "Azura", "Krellus", "Xalon", "Zephyr", "Krysta", "Ylthar", "Vexxor", "Zyndra", "Drakthar", "Quilrax", "Thelora", "Zygor", "Xarix", "Vylara", "Zindor", "Krognar" ]


  return (
    <div className="gameboard">
      {alienObjects.map((alien) => {
        alien.name = alienNames[alienObjects.indexOf(alien)]
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
