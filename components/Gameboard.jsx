import { useState } from 'react';
import AlienCard from './AlienCard';
import LoadingState from './LoadingState';

export default function Gameboard({
  isLoading,
  alienObjects,
  setAlienObjects,
}) {
  const alienNames = [
    'Zorkon',
    'Xyloph',
    'Velnar',
    'Qwixar',
    'Zyla',
    'Gorgon',
    'Xandria',
    'Vortek',
    'Azura',
    'Krellus',
    'Xalon',
    'Zephyr',
    'Krysta',
    'Ylthar',
    'Vexxor',
    'Zyndra',
    'Drakthar',
    'Quilrax',
    'Thelora',
    'Zygor',
    'Xarix',
    'Vylara',
    'Zindor',
    'Krognar',
  ];

  return (
    <div className="gameboard">
      {isLoading ? <LoadingState /> : null}
      {alienObjects.map((alien) => {
        alien.name = alienNames[alienObjects.indexOf(alien)];
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


// Mike was here