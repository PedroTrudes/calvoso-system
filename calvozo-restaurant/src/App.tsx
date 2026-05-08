import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Login} from "./pages/login";
import {Dashboard} from "./pages/dashboard";
import {Kitchen} from "./pages/kitchen";
import {Order} from "./pages/order";
import {Product} from "./pages/product";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cozinha" element={<Kitchen />} />
          <Route path="/pedido" element={<Order />} />
          <Route path="/produto" element={<Product />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;
