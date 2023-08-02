import { OpponentContext } from "@/contexts/OpponentObject";
import { useContext } from "react";

export default function QuestionCard() {
  const { opponentObject, setOpponentObject } = useContext(OpponentContext);

  opponentObject.isFriendly = false;
  opponentObject.body = "body-green-furry";

  return <div className="questioncard">QuestionCard</div>;
}
