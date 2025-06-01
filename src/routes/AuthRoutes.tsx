import { Routes, Route } from "react-router-dom";

// @ts-ignore
import Login from "../pages/client/login";

// @ts-ignore
import Home from "../pages/client/home";
// @ts-ignore
import Catalogo from "../pages/client/catalogo";
// @ts-ignore
import DetalleProducto from "../pages/client/DetalleProducto";
// @ts-ignore
import Carrito from "../pages/client/Carrito";
// @ts-ignore
import Checkout from "../pages/client/Checkout";
// @ts-ignore
import Registro from "../pages/client/Registro";
// @ts-ignore
import Dashboard from "../pages/admin/dashboard";
// @ts-ignore
import Vendedor from "../pages/vendedor/dashboard";
// @ts-ignore
import Bodeguero from "../pages/bodeguero/dashboard";
// @ts-ignore
import Contador from "../pages/contador/dashboard";
// @ts-ignore

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalogo />} />
      <Route path="/cart" element={<Carrito />} />
      <Route path="/product/:id" element={<DetalleProducto />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="register" element={<Registro />} />
      <Route path="admin/dashboard" element={<Dashboard />} />
      <Route path="vendedor/dashboard" element={<Vendedor />} />
      <Route path="bodeguero/dashboard" element={<Bodeguero />} />
      <Route path="contador/dashboard" element={<Contador />} />
    </Routes>
  );
}
