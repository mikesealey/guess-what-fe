export const LandingCard = () => {
  return (
    <div className="landingcard">
      <h2>Welcome!</h2>

      <p>
        Ask yes or no questions to find out which randomly generated alien your
        opponent has chosen
      </p>
      <p>Please enter your name</p>
      <form className="sign-in-form" id="sign-in">
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="room-id">Room ID: </label>
          <input type="text" id="room-id" />
        </div>
        <div className="flex gap-4">
          <button id="singleplayer-btn">1 player</button>
          <button id="multiplayer-btn">2 player</button>
        </div>
      </form>
    </div>
  );
};
