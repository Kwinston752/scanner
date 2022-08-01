import { Box, Skeleton } from "@mui/material"
import { Order as OrderInterface } from './../../models/Order';
import { Order  } from "../../components/Order";

interface OrdersProps {
  data: OrderInterface[],
  isLoading: boolean
}

export const Orders = (props: OrdersProps) => {
  const { data, isLoading } = props

  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      {
        isLoading ? (
          new Array(10).fill(null).map((a, index) => (
            <Skeleton
              variant="rectangular"
              width={'100%'}
              height={88}
              sx={{
                borderRadius: '8px',
                background: '#38454F'
              }}
            />
          ))
        ) : (
          data.map(order => (
            <Order
              key={order.id}
              order={order}
            />
          ))
        )
      }
    </Box>
  )
}