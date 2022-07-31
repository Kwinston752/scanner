
import { Axios } from 'axios';

export const HTTP = new Axios({
  baseURL: 'http://localhost:5050',
  headers: {
    "Content-Type": "application/json"
  }
})