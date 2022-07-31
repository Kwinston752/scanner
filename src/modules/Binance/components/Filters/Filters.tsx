import { Button, Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';


export const Filter = (props: any) => {
  const { tradeType, limit, payTypes, handleFilter, fetchOrders} = props

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
            <MenuItem value={'BUY'}>Покупка</MenuItem>
            <MenuItem value={'SELL'}>Продажа</MenuItem>
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
            value={payTypes}
            onChange={(e) => handleFilter('payTypes', e.target.value)}
            size="small"
            multiple

            sx={{
              background: '#232931',
              borderRadius: '4px',
  
              color: 'white'
            }}
          >
            <MenuItem value={'KaspiBank'}>Kaspi Bank</MenuItem>
            <MenuItem value={'HalykBank'}>Halyk Bank</MenuItem>
            <MenuItem value={'JysanBank'}>Jysan Bank</MenuItem>
            <MenuItem value={'ForteBank'}>Forte Bank</MenuItem>
            <MenuItem value={'EurasianBank'}>Eurasian Bank</MenuItem>
            <MenuItem value={'CenterCreditBank'}>CenterCredit Bank</MenuItem>
            <MenuItem value={'AltynBank'}>Altyn Bank</MenuItem>
            <MenuItem value={'AdvCash'}>AdvCash</MenuItem>
            <MenuItem value={'QIWI'}>QIWI</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="small"
          sx={{
            width: '200px',
          }}
          onClick = {() => fetchOrders()}
        >
          Поиск
        </Button>
      </Box>
    </Box>
  )
}