

export interface Order {
  adv: {
    abnormalStatusList: null
    advNo: string
    advStatus: null
    advUpdateTime: null
    advVisibleRet: null
    amountAfterEditing: null
    asset: string
    assetLogo: null
    assetScale: number
    assetVo: null
    autoReplyMsg: ""
    buyerBtcPositionLimit: null
    buyerKycLimit: null
    buyerRegDaysLimit: null
    classify: string
    commissionRate: string
    createTime: null
    currencyRate: null
    dynamicMaxSingleTransAmount: string
    dynamicMaxSingleTransQuantity: string
    fiatScale: number
    fiatSymbol: string
    fiatUnit: string
    fiatVo: null
    initAmount: null
    isTradable: true
    launchCountry: null
    maxSingleTransAmount: string
    maxSingleTransQuantity: string
    minSingleTransAmount: string
    minSingleTransQuantity: string
    payTimeLimit: null
    price: string
    priceFloatingRatio: null
    priceScale: number
    priceType: null
    rateFloatingRatio: null
    remarks: null
    surplusAmount: string
    tradableQuantity: string
    tradeMethodCommissionRates: []
    tradeMethods: {
      iconUrlColor: null
      identifier: string
      payAccount: null
      payBank: null
      payId: null
      payMethodId: string
      paySubBank: null
      payType: null
      tradeMethodBgColor: string
      tradeMethodName: string
      tradeMethodShortName: string
    }[]
    tradeType: "SELL" | "BUY"
    userAllTradeCountMax: null
    userAllTradeCountMin: null
    userBuyTradeCountMax: null
    userBuyTradeCountMin: null
    userSellTradeCountMax: null
    userSellTradeCountMin: null
    userTradeCompleteCountMin: null
    userTradeCompleteRateFilterTime: null
    userTradeCompleteRateMin: null
    userTradeCountFilterTime: null
    userTradeType: null
    userTradeVolumeAsset: null
    userTradeVolumeFilterTime: null
    userTradeVolumeMax: null
    userTradeVolumeMin: null
  },
  advertiser: {
    advConfirmTime: null
    email: null
    isBlocked: null
    margin: null
    marginUnit: null
    mobile: null
    monthFinishRate: number
    monthOrderCount: number
    nickName: string
    orderCount: null
    proMerchant: null
    realName: null
    registrationTime: null
    tagIconUrls: []
    userGrade: number
    userIdentity: string
    userNo: string
    userType: string
  }
}