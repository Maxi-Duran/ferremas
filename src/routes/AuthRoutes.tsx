import { Routes, Route } from "react-router-dom";

import Login from "../pages/client/login";

import Home from "../pages/client/home";

import Catalogo from "../pages/client/catalogo";

import DetalleProducto from "../pages/client/DetalleProducto";

import Carrito from "../pages/client/Carrito";

import Checkout from "../pages/client/Checkout";

import Registro from "../pages/client/Registro";

import Dashboard from "../pages/admin/dashboard";

import Vendedor from "../pages/vendedor/dashboard";

import Bodeguero from "../pages/bodeguero/dashboard";

import Contador from "../pages/contador/dashboard";
import ProtectedRoute from "../components/protectedRoute";

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
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vendedor/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Vendedor"]}>
            <Vendedor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contador/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Contador"]}>
            <Contador />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bodeguero/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Bodeguero"]}>
            <Bodeguero />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
