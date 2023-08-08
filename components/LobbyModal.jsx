"use client";

import { getAliens } from "@/app/utils/getAliens";
import { SocketContext } from "@/contexts/Socket";
import { ThisUserContext } from "@/contexts/ThisUser";
import { UsersContext } from "@/contexts/User";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function LobbyModal({
  socket,
  io,
  setAlienObjects,
  setChosenAlien,
  chooseSecretAlien,
  setDisplayLobby,
}) {
  const { users, setUsers } = useContext(UsersContext);
  const { yourSocket, setYourSocket } = useContext(SocketContext);
  const [waitingPlayerTwo, setWaitingPlayerTwo] = useState(true);
  const { thisUser, setThisUser } = useContext(ThisUserContext);
  const router = useRouter();
  // const alien1 = {
  //   name: "Klagnor",
  // };
  // const alien2 = {
  //   name: "Jeremy",
  // };

  useEffect(() => {
    socket.emit("find", { name: thisUser.name });
    socket.on("your-socketid", (id) => {
      setYourSocket(id);
    });
    socket.on("find", (e) => {
      let obj = { ...users };
      obj.p1.p1name = e.allPlayers[0].p1.p1name;
      obj.p2.p2name = e.allPlayers[0].p2.p2name;
      obj.p1.p1socketId = e.allPlayers[0].p1.p1socketId;
      obj.p2.p2socketId = e.allPlayers[0].p2.p2socketId;
      setUsers(obj);
    });
  }, []);

  useEffect(() => {
    if (users.p1.p1name && users.p2.p2name) {
      setWaitingPlayerTwo(false);
    }
  }, [users]);

  // useEffect(() => {
  //   if (users.p1.p1name && users.p2.p2name) {
  // getAliens().then((res) => {
  //   console.log(res, "<<<<<<res");
  //   setAlienObjects(res);
  // setChosenAlien(chooseSecretAlien(res));
  // let obj = { ...users };
  // obj.p1.p1alien = chooseSecretAlien(res);
  // obj.p2.p2alien = chooseSecretAlien(res);
  // obj.allAliens = res;
  // setUsers(obj);
  //     });
  //   }
  // }, [waitingPlayerTwo]);

  function handleClick() {
    socket.emit("start-game");
  }

  socket.on("proceed", () => {
    setDisplayLobby(false);
  });

  return (
    <div className="modal">
      <div className="text-box">
        <h1>lobby</h1>
        <h2>Welcome to Guess What?!</h2>
        {users.p1.p1name && <p>{users.p1.p1name} is ready</p>}
        {users.p2.p2name && <p>{users.p2.p2name} is ready</p>}
        {waitingPlayerTwo && (
          <>
            <p>waiting for your mate...</p>
            <img src="/assets/flying-saucer-joypixels.gif" width="150px" />
          </>
        )}
        {!waitingPlayerTwo ? (
          <button onClick={handleClick}>start game</button>
        ) : null}
      </div>
    </div>
  );
}
