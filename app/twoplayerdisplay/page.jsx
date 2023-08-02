"use client";
import { Footer } from "@/components/Footer";
import Gameboard from "@/components/Gameboard";
import { Header } from "@/components/Header";
import LobbyModal from "@/components/LobbyModal";
import OpponentCard from "@/components/OpponentCard";
import QuestionCard from "@/components/QuestionCard";
import UserStats from "@/components/UserStats";
import UsersCard from "@/components/UsersCard";
import EndGameModal from "@/components/EndGameModal";
import { useState } from "react";

export default function TwoPlayerDisplay() {
  const [isGameFinished, setIsGameFinished] = useState(false);
  
  return (
    <>
      <Header />
      <div className="two-player-game-wrapper">
        {/* <LobbyModal /> remove later */}
        {isGameFinished && <EndGameModal />}
        <Gameboard className="two-player-gameboard" />
        <QuestionCard />
        <OpponentCard />
        <UsersCard />
      </div>
      <Footer />
    </>
  );
}
