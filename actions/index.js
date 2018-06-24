import axios from 'axios';
const API_KEY = '127b56d0f9c142b1fec47df38d565788';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WETHER = 'FETCH_WETHER';

export function fetchWether(city) {
  const url = `${ROOT_URL}&q=${city},BG&units=metric`;
  const request = axios.get(url);
  return {
    type: FETCH_WETHER,
    payload: request
  }
}