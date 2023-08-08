'use client';

import { SocketContext } from '@/contexts/Socket';
import { UsersContext } from '@/contexts/User';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
const { io } = require('socket.io-client');

const socket = io('https://guess-what-api.onrender.com/');
export default function LobbyModal() {
  const { users, setUsers } = useContext(UsersContext);
  const { yourSocket, setYourSocket } = useContext(SocketContext);
  const [waitingPlayerTwo, setWaitingPlayerTwo] = useState(true);
  const router = useRouter();
  const alien1 = {
    name: 'Klagnor',
  };
  const alien2 = {
    name: 'Jeremy',
  };

  useEffect(() => {
    if (users.p1.p1name && users.p2.p2name) {
      setWaitingPlayerTwo(false);
    }
  }, [users]);

  useEffect(() => {
    if (users.p1.p1name && users.p2.p2name) {
      let obj = { ...users };
      obj.p1.p1alien = alien1;
      obj.p2.p2alien = alien2;
      setUsers(obj);
    }
  }, [waitingPlayerTwo]);
  function handleClick() {
    socket.emit('start-game');
  }

  socket.on('proceed', () => {
    router.push('/twoplayerdisplay');
  });

  //   let displayLobbyModal = true;

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
