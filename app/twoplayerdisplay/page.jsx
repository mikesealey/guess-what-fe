import { Footer } from "@/components/Footer";
import Gameboard from "@/components/Gameboard";
import { Header } from "@/components/Header";
import OpponentCard from "@/components/OpponentCard";
import QuestionCard from "@/components/QuestionCard";
import UserStats from "@/components/UserStats";
import UsersCard from "@/components/UsersCard";


export default function TwoPlayerDisplay(){

    return (
        <>
            <Header />
            <div className="two-player-game-wrapper">
                
                <Gameboard className="two-player-gameboard"/>
                <QuestionCard />
                <OpponentCard/>
                <UsersCard />
                <UserStats />
            </div>
            <Footer/>
        </>
    )
}