import { getLeaderboard } from "@/app/utils/getAliens";
import { useState, useEffect } from "react";

export default function LeaderBoardModal() {
  const [users, setUsers] = useState([]);
  const [sort_by, setSort_by] = useState("score");
  const [timePeriod, setTimePeriod] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLeaderboard(sort_by, timePeriod, page).then((users) => {
      setUsers(users);
    });
  }, [sort_by, timePeriod, page]);

  return (
    <div className="modal">
      <div className="leaderboard-text-box">
        <h1>Leaderboard modal</h1>
        <select
          onChange={(e) => {
            setSort_by(e.target.value);
          }}
        >
          <option value="score">Score</option>
          <option value="time">Time</option>
          <option value="created_at">Most Recent</option>
        </select>
        <select
          onChange={(e) => {
            if (e.target.value === "All Time") {
              setTimePeriod(null);
            } else {
              setTimePeriod(e.target.value);
            }
          }}
        >
          <option value={null}>All Time</option>
          <option value="year">Year</option>
          <option value="month">Month</option>
          <option value="week">Week</option>
        </select>
        <div className="result-row">
          <h2>Ranking:</h2>
          <h2>Name:</h2>
          <h2>Time:</h2>
          <h2>Score:</h2>
        </div>
        {users.map((user) => {
          return (
            <div key={user._id} className="result-row">
              <div>{users.indexOf(user) + 1 + (page - 1) * 10}</div>
              <div>{user.username}</div>
              <div>
                {user.time.minutes}:{user.time.seconds}
              </div>
              <div>{user.score}</div>
            </div>
          );
        })}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          -
        </button>
        <p>page: {page}</p>
        <button onClick={() => setPage(page + 1)}>+</button>
      </div>
    </div>
  );
}
