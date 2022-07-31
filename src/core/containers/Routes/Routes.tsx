import { Route, Routes as DomRoutes } from "react-router-dom";
import { RootPage } from "../../../modules/Binance";


export const Routes = () => (
  <DomRoutes>
    <Route path="/binance" element={<RootPage />} />
  </DomRoutes>
)