import { Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';


interface FiltersProps {
  limit: string
  tradeType: number
  payType: string
  handleFilter: (filterName: 'limit' | 'tradeType' | 'payType', newValue: string | number) => void
  fetchOrders: () => void
}

export const Filters = (props: FiltersProps) => {
  const { limit, tradeType, payType, handleFilter, fetchOrders } = props

  return (
    <Box>
      <Typography color="white" fontSize={18}>Фильтры:</Typography>
      <Box sx={{
        marginTop: '20px',
        display: 'flex',
        gap: '30px'
      }}>
        <FormControl sx={{width: '300px'}}>
          <InputLabel sx={{color: 'white'}}>Тип ордеров</InputLabel>
          <Select
            value={tradeType}
            onChange={(e) => handleFilter('tradeType', e.target.value)}
            size="small"

            sx={{
              background: '#232931',
              borderRadius: '4px',
  
              color: 'white'
            }}
          >
            <MenuItem value={1}>Покупка</MenuItem>
            <MenuItem value={0}>Продажа</MenuItem>
          </Select>
        </FormControl>

        <TextField
          size="small"
          label="Сумма"
          value={limit}
          onChange={(e) => handleFilter('limit', e.target.value)}
          sx={{
            background: '#232931',
            borderRadius: '4px',

            label: { color: 'white' },
            input: { color: 'white' }
          }}
        />

        <FormControl fullWidth>
          <InputLabel sx={{color: 'white'}}>Оплата</InputLabel>
          <Select
            value={payType}
            onChange={(e) => handleFilter('payType', e.target.value)}
            size="small"

            sx={{
              background: '#232931',
              borderRadius: '4px',
  
              color: 'white'
            }}
          >
            <MenuItem value={''}>Все способы оплаты</MenuItem>
            <MenuItem value={'150'}>Kaspi Bank</MenuItem>
            <MenuItem value={'203'}>Halyk Bank</MenuItem>
            <MenuItem value={'149'}>Jysan Bank</MenuItem>
            <MenuItem value={'144'}>Forte Bank</MenuItem>
            <MenuItem value={'262'}>Eurasian Bank</MenuItem>
            <MenuItem value={'211'}>CenterCredit Bank</MenuItem>
            <MenuItem value={'280'}>Altyn Bank</MenuItem>
            <MenuItem value={'5'}>AdvCash</MenuItem>
            <MenuItem value={'62'}>QIWI</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{
            width: '200px',
            color: 'white'
          }}
          onClick = {() => fetchOrders()}
        >
          Поиск
        </Button>
      </Box>
    </Box>
  )
}