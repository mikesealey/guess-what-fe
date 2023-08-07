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
import chooseSecretAlien from "../utils/chooseSecretAlien";
import ScoreTwoPlayer from '@/components/ScoreTwoPlayer';

export default function TwoPlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [alienObjects, setAlienObjects] = useState([]);
  const [chosenAlien, setChosenAlien] = useState();
  const [hasWon, setHasWon] = useState(null);

  useEffect(() => {
    getAliens().then((res) => {
      setAlienObjects(res);
      setChosenAlien(chooseSecretAlien(res));
    });
  }, []);

  return (
    <main>
      <Header />
      <div className="two-player-game-wrapper">
        {/* <LobbyModal /> remove later */}
        {isGameFinished && <EndGameModal chosenAlien={chosenAlien} setIsGameFinished={setIsGameFinished} setHasWon={setHasWon}/>}
        <Gameboard
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
          className="two-player-gameboard"
        />
        <QuestionCard
          alienObjects={alienObjects}
          setAlienObjects={setAlienObjects}
          setIsGameFinished={setIsGameFinished}
          chosenAlien={chosenAlien}
          hasWon={hasWon}
          setHasWon={setHasWon}
        />
        <OpponentCard />
        <UsersCard />
        <ScoreTwoPlayer />
      </div>
      <Footer />
    </main>
  );
}
