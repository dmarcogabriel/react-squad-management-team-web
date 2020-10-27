import axios from 'axios';

const api = axios.create({
  baseURL: 'https://soccer.sportmonks.com/api/v2.0',
});

export default api;
