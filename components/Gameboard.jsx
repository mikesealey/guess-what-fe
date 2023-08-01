import { getAliens } from '@/app/utils/getAliens';
import AlienCard from './AlienCard';
import { useEffect, useState } from 'react';

export default function Gameboard() {
  const [alienObjects, setAlienObjects] = useState([]);

  useEffect(() => {
    getAliens().then((res) => {
      setAlienObjects(res);
    });
  }, []);

  return (
    <div className="gameboard">
      {alienObjects.map((alien) => {
        return <AlienCard alien={alien} key={alien._id} />;
      })}
    </div>
  );
}
