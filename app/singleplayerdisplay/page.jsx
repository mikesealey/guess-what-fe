import { Footer } from '@/components/Footer';
import Gameboard from '@/components/Gameboard';
import { Header } from '@/components/Header';
import OpponentCard from '@/components/OpponentCard';
import QuestionCard from '@/components/QuestionCard';
import UserStats from '@/components/UserStats';

export default function SinglePlayerDisplay() {
  return (
    <>
      <Header />
      <div className="game-wrapper">
        <Gameboard />
        <QuestionCard />
        <OpponentCard />
        <UserStats />
      </div>
      <Footer />
    </>
  );
}
