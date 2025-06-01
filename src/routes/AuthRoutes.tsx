import { Routes, Route } from "react-router-dom";

// @ts-ignore
import Login from "../pages/client/login.jsx";

// @ts-ignore
import Home from "../pages/client/home.jsx";

// @ts-ignore
import Catalogo from "../pages/client/catalogo.jsx";

// @ts-ignore
import DetalleProducto from "../pages/client/DetalleProducto.jsx";
// @ts-ignore
import Carrito from "../pages/client/Carrito.jsx";
// @ts-ignore
import Checkout from "../pages/client/Checkout.jsx";
// @ts-ignore
import Registro from "../pages/client/Registro.jsx";
// @ts-ignore
import Dashboard from "../pages/admin/dashboard.jsx";
// @ts-ignore
import Vendedor from "../pages/vendedor/dashboard.jsx";
// @ts-ignore
import Bodeguero from "../pages/bodeguero/dashboard.jsx";
// @ts-ignore
import Contador from "../pages/contador/dashboard.jsx";

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
