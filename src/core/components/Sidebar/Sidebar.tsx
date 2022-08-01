import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BinanceSVG from "./../../../resources/svg/binance-logo.svg";
import BybitSVG from "./../../../resources/svg/bybit-logo.svg";

export const Sidebar = () => {
  const navigate = useNavigate()

  const onClick = (route: string) => {
    navigate(route, { replace: true })
  }

  return (
    <>
      <Box
        sx={{
          width: '75px',
          bottom: 0,
          top: 0,
          background: '#232931',
          position: 'fixed',
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          boxSizing: 'border-box'
        }}
      >
        <Button
          variant={'contained'}
          fullWidth
          onClick={() => onClick('/binance')}
          color="secondary"
          sx={{
            minWidth: '45px',
            width: '45px',
            height: '45px',
            padding: '0px',

            img: {
              width: '30px'
            }
          }}
        >
          <img src={BinanceSVG} alt="" />
        </Button>
        <Button
          variant={'contained'}
          fullWidth
          onClick={() => onClick('/bybit')}
          color="secondary"
          sx={{
            minWidth: '45px',
            width: '45px',
            height: '45px',
            padding: '0px',

            img: {
              width: '30px'
            }
          }}
        >
          <img src={BybitSVG} alt="" />
        </Button>
      </Box>
      <Box sx={{ width: '210px' }}></Box>
    </>
  )
}