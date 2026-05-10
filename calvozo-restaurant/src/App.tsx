import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Login} from "./pages/login";
import {Dashboard} from "./pages/dashboard";
import {Kitchen} from "./pages/kitchen";
import {Order} from "./pages/order";
import {Product} from "./pages/product";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { PrivateLayout } from "./layouts/PrivateLayout";
import { Menu } from "./pages/menu";

function App() {
  return(
    <>
      <ToastContainer autoClose={1000}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cozinha" element={<Kitchen />} />
            <Route path="/pedido" element={<Order />} />
            <Route path="/produto" element={<Product />} />
            <Route path="/cardapio" element={<Menu />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App;
