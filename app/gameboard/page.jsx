import { Footer } from '@/components/Footer';
import Gameboard from '@/components/Gameboard';
import { Header } from '@/components/Header';
import OpponentCard from '@/components/OpponentCard';
import QuestionCard from '@/components/QuestionCard';

export default function GameBoard() {
  return (
    <>
      <Header />
      <div className="game-wrapper">
        <Gameboard />
        <QuestionCard />

        <OpponentCard />
        <h1>User Stats</h1>
      </div>
      <Footer />
    </>
  );
}
