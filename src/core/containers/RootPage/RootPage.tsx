import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Routes } from "../Routes";
import { theme } from './../../theme/main';


export const RootPage = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box sx={{
        display: 'flex',
        width: '100%',
      }}>
        <Sidebar />
        <Routes />
      </Box>
    </BrowserRouter>
  </ThemeProvider>
)