import { Box } from '@mui/material';
import { Filters } from '../../components/Filters';
import { useState } from 'react';
import { bybitApi } from './../../../../api/bybit/index';
import { Order } from './../../models/Order';
import { Orders } from '../Orders';
import { useEffect } from 'react';


export const RootPage = () => {
  const [filters, setFilters] = useState({
    limit: '',
    tradeType: 1,
    payType: ''
  })
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const handleFilter = (filterName: 'limit' | 'tradeType' | 'payType', newValue: string | number) => {
    setFilters(prevState => ({
      ...prevState,
      [filterName]: newValue
    }))
  }

  const fetchOrders = async () => {
    setIsLoading(true)
    const response = await bybitApi.getRates(filters.tradeType, filters.payType, filters.limit)
    await setOrders(JSON.parse(response.data).result.items)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <Box
      sx={{
        width: '1024px',
        margin: '50px auto'
      }}
    >
      <Filters
        limit={filters.limit}
        tradeType={filters.tradeType}
        payType={filters.payType}
        handleFilter={handleFilter}
        fetchOrders={fetchOrders}
      />
      <Orders
        data={orders}
        isLoading={isLoading}
      />
    </Box>
  )
}