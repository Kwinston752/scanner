
import { Axios } from 'axios';

export const HTTP = new Axios({
  baseURL: 'https://scanner-backend-five.vercel.app/',
  headers: {
    "Content-Type": "application/json"
  }
})