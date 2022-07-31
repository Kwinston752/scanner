import { Filter } from "../../components/Filters"
import { Box } from '@mui/material';
import { useState } from "react";
import { binanceApi } from './../../../../api/binance/index';
import { Order } from "../../models/Order";
import { Orders } from "../Orders";


export const RootPage = () => {
  const [filters, setFilters] = useState({
    tradeType: 'BUY',
    limit: '5000',
    payTypes: ['KaspiBank']
  })
  const [orders, setOrders] = useState<Order[]>([])

  const handleFilterChange = (filterName: 'tradeType' | 'limit' | 'payTypes', newValue: string & string[]) => {
    setFilters(prevState => ({
      tradeType: filterName === 'tradeType' ? newValue : prevState.tradeType,
      limit: filterName === 'limit' ? newValue : prevState.limit,
      payTypes: filterName === 'payTypes' ? newValue : prevState.payTypes
    }))
  }

  const handleFilterClick = async () => {
    const response = await binanceApi.getRates(filters.tradeType, filters.limit, filters.payTypes)
    setOrders(JSON.parse(response.data).data)
  }

  return (
    <Box
      sx={{
        width: '1024px',
        margin: '50px auto'
      }}
    >
      <Filter
        tradeType={filters.tradeType}
        limit={filters.limit}
        payTypes={filters.payTypes}
        handleFilter={handleFilterChange}
        fetchOrders={handleFilterClick}
      />
      <Orders
        data={orders}
      />
    </Box>
  )
}