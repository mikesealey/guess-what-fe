'use client';
import { Footer } from '@/components/Footer';
import Gameboard from '@/components/Gameboard';
import { Header } from '@/components/Header';
import LobbyModal from '@/components/LobbyModal';
import OpponentCard from '@/components/OpponentCard';
import QuestionCard from '@/components/QuestionCard';
import UserStats from '@/components/UserStats';
import UsersCard from '@/components/UsersCard';
import EndGameModal from '@/components/EndGameModal';
import { useState, useEffect } from 'react';
import { getAliens } from '../utils/getAliens';

export default function TwoPlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [alienObjects, setAlienObjects] = useState([]);
  const [chosenAlien, setChosenAlien] = useState()

  useEffect(() => {
    getAliens().then((res) => {
      setAlienObjects(res);
      setChosenAlien(chooseSecretAlien(res))
    });
  }, []);

  return (
    <>
      <Header />
      <div className="two-player-game-wrapper">
        {/* <LobbyModal /> remove later */}
        {isGameFinished && <EndGameModal />}
        <Gameboard
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
          className="two-player-gameboard"
        />
        <QuestionCard
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
        />
        <OpponentCard />
        <UsersCard />
      </div>
      <Footer />
    </>
  );
}
