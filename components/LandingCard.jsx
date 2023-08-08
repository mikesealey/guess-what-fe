"use client";

import { UsersContext } from "@/contexts/User";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThisUserContext } from "@/contexts/ThisUser";

export const LandingCard = () => {
  const [clicked, setClicked] = useState(false);

  const { thisUser, setThisUser } = useContext(ThisUserContext);
  const router = useRouter();

  function handleSinglePlayerClick(e) {
    e.preventDefault();
    setClicked(true);
    router.push("/singleplayerdisplay");
  }

  function handleTwoPlayerClick(e) {
    e.preventDefault();
    setClicked(true);

    router.push("/twoplayerdisplay");
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
              value={thisUser.name}
              onChange={(e) => {
                let obj = { ...thisUser };
                obj.name = e.target.value;
                setThisUser(obj);
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
      </form>
    </div>
  );
};
