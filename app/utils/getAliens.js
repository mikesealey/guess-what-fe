import axios from 'axios';
const api = axios.create({
  baseURL: 'https://guess-what-api.onrender.com/api',
});

export const getAliens = () => {
  return api.get('/aliens').then(({ data }) => data.aliens);
};
