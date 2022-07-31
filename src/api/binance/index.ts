import { HTTP } from './../index';

export const binanceApi = {
  getRates: (tradeType: string, limit: string, payTypes: string[]) => {
    return HTTP.post('/binance/search', JSON.stringify({
      asset: "USDT",
      countries: [],
      fiat: "KZT",
      page: 1,
      payTypes: payTypes,
      publisherType: null,
      rows: 20,
      tradeType: tradeType,
      transAmount: limit,
    }))
  }
}