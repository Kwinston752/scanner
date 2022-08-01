
import { HTTP } from './../index';

export const bybitApi = {
  getRates: (side: number, payment: string, amount: string) => {
    return HTTP.post('/bybit/search', JSON.stringify({
      userId: '',
      tokenId: 'USDT',
      currencyId: 'KZT',
      payment: payment,
      side: side,
      size: 20,
      page: 1,
      amount: amount,
    }))
  }
}