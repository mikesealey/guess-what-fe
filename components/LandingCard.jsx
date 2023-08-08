"use client";

import { UsersContext } from "@/contexts/User";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SocketContext } from "@/contexts/Socket";
const { io } = require("socket.io-client");

const socket = io("https://guess-what-api.onrender.com/");
export const LandingCard = () => {
  const { users, setUsers } = useContext(UsersContext);
  const { yourSocket, setYourSocket } = useContext(SocketContext);

  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  function handleSinglePlayerClick(e) {
    e.preventDefault();
    setClicked(true);
    router.push("/singleplayerdisplay");
  }

  function handleTwoPlayerClick(e) {
    e.preventDefault();
    setClicked(true);
    socket.emit("find", { name: userName });
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
    router.push("/lobby");
  }

  return (
    <div className="landing-text-box">
      <h2>Welcome!</h2>

      <p>
        Ask yes or no questions to find out which randomly generated alien your
        opponent has chosen
      </p>

      <form className="sign-in-form" id="sign-in">
        <div className="input-boxes">
          <p>Please enter your name</p>
          <div className="flex flex-col">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="room-id">Room ID: </label>
            <input type="text" id="room-id" />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            id="singleplayer-btn"
            // disabled={clicked || userName === ''}
            onClick={(e) => {
              handleSinglePlayerClick(e);
            }}
          >
            1 player
          </button>
          <button
            id="multiplayer-btn"
            onClick={(e) => {
              handleTwoPlayerClick(e);
            }}
          >
            2 player
          </button>
        </div>
        <button>
          <Link href="/leaderboarddisplay">View Leaderboard</Link>
        </button>
      </form>
    </div>
  );
};
