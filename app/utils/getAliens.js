import axios from 'axios';
const api = axios.create({
  baseURL: 'https://guess-what-api.onrender.com/api',
});

export const getAliens = () => {
  return api.get('/aliens').then(({ data }) => data.aliens);
};

export const getQuestions = () => {
  return api.get('/questions').then(({ data }) => data.questions)
}

export const postUser = (username, score, minutes, seconds) => {
  if (!username) return console.log("No username set")
  return api.post('/users', {
    username: username,
    score: score,
    minutes: minutes,
    seconds: seconds
  })
}