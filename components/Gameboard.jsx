import { getAliens } from '@/app/utils/getAliens';
import AlienCard from './AlienCard';
import { useEffect, useState } from 'react';

export default function Gameboard(  ) {
  const [alienObjects, setAlienObjects] = useState([]);

  useEffect(() => {
    getAliens().then((res) => {
      setAlienObjects(res);
    });
  }, []);
  console.log(alienObjects)

  return (
    <div className="gameboard">
      {alienObjects.map((alien) => {
        return <AlienCard alien={alien} alienObjects={alienObjects} setAlienObjects={setAlienObjects} key={alien._id} />;
      })}
    </div>
  );
}
