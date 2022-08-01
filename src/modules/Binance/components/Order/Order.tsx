import { Order as OrderInterface } from './../../models/Order';
import { Box, Typography } from '@mui/material';

import MerchantSVG from './../../../../resources/svg/merchant.svg';
import ArrowRight from './../../../../resources/svg/arrow-right.svg';


interface OrderProps {
  order: OrderInterface
}

export const Order = ({ order }: OrderProps) => (
  <Box
    sx={{
      background: '#38454F',
      borderRadius: '8px',
      height: '88px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 14px',
      color: "#EAE7D6"
    }}
  >
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{
          height: '30px',
          width: '30px',
          background: '#5A4CFF',
          color: 'white',
          textAlign: 'center',
          borderRadius: '50%',
          lineHeight: '27px',
          marginRight: '8px'
        }}>
          {order.advertiser.nickName.slice(0, 1).toUpperCase()}
        </Box>
        <Typography lineHeight="31px">
          {order.advertiser.nickName} {
            order.advertiser.userType === 'merchant' && (
              <img src={MerchantSVG} alt="" />
            )
          }
        </Typography>
      </Box>
      <Typography fontSize={12} marginTop={'8px'}>
        {order.advertiser.monthOrderCount} ордеров | {(order.advertiser.monthFinishRate * 100).toFixed(0)}% выполнено
      </Typography>
    </Box>
    <Typography fontSize={18}>
      {order.adv.price}{order.adv.fiatSymbol}
    </Typography>
    <Box>
      <Typography fontSize={14} lineHeight={1.8}>
        Доступно: {order.adv.dynamicMaxSingleTransQuantity} USDT
      </Typography>
      <Typography fontSize={14} lineHeight={1.8}>
        Лимиты: {order.adv.fiatSymbol}{Number(order.adv.minSingleTransAmount).toFixed(0)} - {order.adv.fiatSymbol}{Number(order.adv.dynamicMaxSingleTransAmount).toFixed(0)}
      </Typography>
    </Box>
    <Box sx={{
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      width: '240px',
    }}>
      {
        order.adv.tradeMethods.map((bank, index) => (
          <Box
            key={index}
            sx={{
              background: `${bank.tradeMethodBgColor}`,
              padding: '2px 6px',
              borderRadius: '6px',
              lineHeight: '16px',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            {bank.identifier}
          </Box>
        ))
      }
    </Box>
    <a
      href={`https://p2p.binance.com/ru/advertiserDetail?advertiserNo=${order.advertiser.userNo}`}
      target="_blank"
      rel="noreferrer"
    >
      <Box sx={{
        width: '40px',
        height: '40px',
        background: '#5A4CFF',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',

        img: {
          width: '12px',
          display: 'block',
          margin: '0 0 0 14px'
        }
      }}>
        <img src={ArrowRight} alt="" />
      </Box>
    </a>
  </Box>
)