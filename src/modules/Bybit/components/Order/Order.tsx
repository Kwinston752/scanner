import { Box, Typography } from '@mui/material';
import { Banks } from '../../models/Banks';
import { Order as OrderInterface } from './../../models/Order';

import ArrowRight from './../../../../resources/svg/arrow-right.svg'

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
          background: '#fef1d6',
          color: '#f7a600',
          fontWEight: 600,
          textAlign: 'center',
          borderRadius: '50%',
          lineHeight: '27px',
          marginRight: '8px'
        }}>
          {order.nickName.slice(0, 1).toUpperCase()}
        </Box>
        <Typography lineHeight="31px">
          {order.nickName}
        </Typography>
      </Box>
      <Typography fontSize={12} marginTop={'8px'}>
        {order.recentOrderNum} ордеров | {Number(order.recentExecuteRate).toFixed(0)}% выполнено
      </Typography>
    </Box>
    <Typography fontSize={18}>
      {order.price}{order.currencyId}
    </Typography>
    <Box>
      <Typography fontSize={14} lineHeight={1.8}>
        Доступно: {order.lastQuantity} USDT
      </Typography>
      <Typography fontSize={14} lineHeight={1.8}>
        Лимиты: {order.minAmount} - {order.maxAmount}
      </Typography>
    </Box>
    <Box sx={{
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      width: '240px',
    }}>
      {
        order.payments.map((bankId: number, index) => (
          <Box
            key={index}
            sx={{
              background: '#d48c00',
              padding: '2px 6px',
              borderRadius: '6px',
              lineHeight: '16px',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            {Banks[bankId]}
          </Box>
        ))
      }
    </Box>
    <a
      href={`https://www.bybit.com/fiat/trade/otc/?actionType=0&token=USDT&fiat=KZT`}
      target="_blank"
      rel="noreferrer"
    >
      <Box sx={{
        width: '40px',
        height: '40px',
        background: '#d48c00',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',

        img: {
          width: '12px',
          display: 'block',
          margin: '0 0 0 15px'
        }
      }}>
        <img src={ArrowRight} alt="" />
      </Box>
    </a>
  </Box>
)