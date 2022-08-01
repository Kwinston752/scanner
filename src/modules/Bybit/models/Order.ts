export interface Order {
  accountId: string
  blocked: string
  createDate: string
  currencyConfig: { scale: number, amountScale: number }
  currencyId: string
  executedQuantity: string
  fee: string
  finishNum: number
  frozenQuantity: string
  id: string
  isOnline: false
  lastLogoutTime: string
  lastQuantity: string
  makerContact: true
  maxAmount: string
  minAmount: string
  nickName: string
  orderNum: number
  payments: number[]
  premium: string
  price: string
  priceType: number
  quantity: string
  recentExecuteRate: number
  recentOrderNum: number
  remark: string
  side: number
  status: number
  takerRequirement: number
  tokenConfig: {
    minQuote: string,
    maxQuote: string,
    scale: number,
    upRange: string,
    downRange: string
  }
  tokenId: string
  tokenName: string
  tradeFeeRate: {
    orgId: string,
    tokenId: string,
    makerBuyTradeFee: string,
    makerSellTradeFee: string
  }
  tradingPreferenceSet: {
    hasUnPostAd: number,
    isKyc: number,
    isEmail: number,
    isMobile: number,
    hasRegisterTime: number,
    registerTimeThreshold: number 
  }
  userId: string
}