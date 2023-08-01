'use client';

import EndGameModal from '@/components/EndGameModal';
import { Footer } from '@/components/Footer';
import Gameboard from '@/components/Gameboard';
import { Header } from '@/components/Header';
import OpponentCard from '@/components/OpponentCard';
import QuestionCard from '@/components/QuestionCard';
import UserStats from '@/components/UserStats';
import { useState } from 'react';

export default function SinglePlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);

  return (
    <>
      <Header />
      <div className="game-wrapper">
        {isGameFinished && <EndGameModal />}
        <Gameboard />
        <QuestionCard />
        <OpponentCard />
        <UserStats />
      </div>
      <Footer />
    </>
  );
}
