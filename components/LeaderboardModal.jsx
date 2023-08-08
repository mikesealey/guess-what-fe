export default function LeaderBoardModal() {
  const placeholderResults = [
    { name: "Mike", time: "05:57", score: 2 },
    { name: "Omar", time: "06:26", score: 5 },
    { name: "Pablo", time: "03:05", score: 3 },
    { name: "Matt", time: "07:08", score: 7 },
    { name: "James", time: "09:45", score: 6 },
    { name: "Connor", time: "06:23", score: 9 },
  ];
  //when we get real data check the type for the score number/string

  return (
    <div className="modal">
      <div className="leaderboard-text-box">
        <h1>Leaderboard modal</h1>
        <div className="result-row">
          <h2>Ranking:</h2>
          <h2>Name:</h2>
          <h2>Time:</h2>
          <h2>Score:</h2>
        </div>
        {placeholderResults.map((result) => {
          return (
            <div className="result-row">
              <div>{placeholderResults.indexOf(result) + 1}</div>
              <div>{result.name}</div>
              <div>{result.time}</div>
              <div>{result.score}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
