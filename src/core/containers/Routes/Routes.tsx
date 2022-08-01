import { Route, Routes as DomRoutes } from "react-router-dom";

import { RootPage as BinanceModule } from "../../../modules/Binance";
import { RootPage as BybitModule } from "../../../modules/Bybit";


export const Routes = () => (
  <DomRoutes>
    <Route path="/binance" element={<BinanceModule />} />
    <Route path="/bybit" element={<BybitModule />} />
  </DomRoutes>
)