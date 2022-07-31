import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { Routes } from "../Routes";


export const RootPage = () => (
  <BrowserRouter>
    <Box sx={{
      display: 'flex',
      width: '100%',
    }}>
      <Sidebar />
      <Routes />
    </Box>
  </BrowserRouter>
)