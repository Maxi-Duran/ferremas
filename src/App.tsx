import "./App.css";
import { AuthRoutes } from "./routes/AuthRoutes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import sucursalesService from "./services/sucursales.service";
import type { Sucursal } from "./types/sucursal";
import { useLocation } from "react-router-dom";
import userService from "./services/usuarios.service";
function App() {
  const [sucursales, setSucursales] = useState<Sucursal[]>([]);
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState<string>("");
  const [usuario, setUsuario] = useState<{ nombre: string } | null>(null);
  type Sucursal2 = {
    id: number;
    nombre: string;
    // agrega otros campos si los tienes
  };
  const [sucursal, setSucursal] = useState<Sucursal2 | null>(null);
  const location = useLocation();
  const rutasSinHeader = [
    "/admin/dashboard",
    "/vendedor/dashboard",
    "/bodeguero/dashboard",
    "/contador/dashboard",
  ];

  const ocultarHeader = rutasSinHeader.includes(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("user");
    if (id) {
      const obtenerUsuario = async () => {
        try {
          const data = await userService.getUserById(id);
          setUsuario(data);
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
      };

      obtenerUsuario();
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("rol") === "Vendedor") {
      navigate("/vendedor/dashboard");
    } else if (localStorage.getItem("rol") === "Contador") {
      navigate("/contador/dashboard");
    } else if (localStorage.getItem("rol") === "Bodeguero") {
      navigate("/bodeguero/dashboard");
    } else if (localStorage.getItem("rol") === "Admin") {
      navigate("/admin/dashboard");
    }
  }, []);

  useEffect(() => {
    const cargarSucursales = async () => {
      try {
        const data = await sucursalesService.getAll();
        setSucursales(data);
      } catch (error) {
        console.error("Error al cargar sucursales:", error);
      }
    };
    const sucursalId = async () => {
      try {
        const data = await sucursalesService.getById(
          localStorage.getItem("sucursal")
        );
        setSucursal(data);
      } catch (error) {}
    };

    sucursalId();
    cargarSucursales();
  }, []);

  return (
    <>
      {!ocultarHeader ? (
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">
                  <a href="/">FERREMAS</a>
                </h1>
                <nav className="hidden md:flex space-x-6">
                  <a href="/catalog" className="hover:text-primary">
                    Catálogo
                  </a>
                  {/* <a href="/categories" className="hover:text-primary">
                  Herramientas
                </a>
                <a href="/construction" className="hover:text-primary">
                  Construcción
                </a>
                <a href="/electrical" className="hover:text-primary">
                  Eléctrico
                </a>
                <a href="/safety" className="hover:text-primary">
                  Seguridad
                </a>
                <a href="/contact" className="hover:text-primary">
                  Contacto
                </a> */}
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <Select
                  onValueChange={(value) => setSucursalSeleccionada(value)}
                  value={sucursalSeleccionada}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sucursal" />
                  </SelectTrigger>
                  <SelectContent>
                    {sucursales.map((sucursal) => (
                      <SelectItem
                        key={sucursal.id_sucursal}
                        value={String(sucursal.id_sucursal)}
                      >
                        {sucursal.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <a href="/cart">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium  border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-cart h-4 w-4 mr-2"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    Carrito (0)
                  </button>
                </a>
                <div>
                  {usuario ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {usuario.nombre}
                      </span>
                      <button
                        onClick={() => {
                          localStorage.removeItem("user");
                          setUsuario(null);
                          window.location.reload();
                        }}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  ) : (
                    <a href="/login">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                        Iniciar sesión
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">
                  Panel {localStorage.getItem("rol")} Ferremas
                </h1>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  data-v0-t="badge"
                >
                  {localStorage.getItem("rol")}
                </div>
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  data-v0-t="badge"
                >
                  {sucursal?.nombre}
                </div>
              </div>
              {usuario && (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {usuario.nombre}
                  </span>
                  <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      localStorage.removeItem("rol");
                      localStorage.removeItem("sucursal");
                      setUsuario(null);
                      window.location.reload();
                    }}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-log-out h-4 w-4 mr-2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
      )}
      <AuthRoutes />
    </>
  );
}

export default App;
