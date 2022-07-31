
import { Axios } from 'axios';

export const HTTP = new Axios({
  baseURL: 'https://scanner-backend-mhys5rcg5-kwinston752.vercel.app',
  headers: {
    "Content-Type": "application/json"
  }
})