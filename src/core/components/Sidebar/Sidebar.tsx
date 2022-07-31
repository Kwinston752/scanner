import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate()

  const onClick = (route: string) => {
    navigate(route, { replace: true })
  }

  return (
    <>
      <Box
        sx={{
          width: '210px',
          bottom: 0,
          top: 0,
          background: '#232931',
          position: 'fixed',
          padding: '50px 25px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          boxSizing: 'border-box'
        }}
      >
        <Button
          variant={window.location.href.includes('/binance') ? 'contained' : 'outlined'}
          fullWidth
          onClick={() => onClick('/binance')}
        >
          Binance
        </Button>
        <Button
          variant={window.location.href.includes('/bybit') ? 'contained' : 'outlined'}
          fullWidth
          onClick={() => onClick('/bybit')}
        >
          Bybit (нихуя не работает)
        </Button>
      </Box>
      <Box sx={{ width: '210px' }}></Box>
    </>
  )
}