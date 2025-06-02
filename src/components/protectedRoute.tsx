// components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const rol = localStorage.getItem("rol");

  if (!rol || !allowedRoles.includes(rol)) {
    // Redirecciona al dashboard correspondiente si el rol no tiene permiso
    switch (rol) {
      case "Vendedor":
        return <Navigate to="/vendedor/dashboard" replace />;
      case "Contador":
        return <Navigate to="/contador/dashboard" replace />;
      case "Bodeguero":
        return <Navigate to="/bodeguero/dashboard" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
