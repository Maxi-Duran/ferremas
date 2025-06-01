import { useEffect, useState } from "react";
import sucursalesService from "../../services/sucursales.service";
import { Slider } from "../../components/ui/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import empleadosService from "../../services/empleados.service";
import userService from "../../services/usuarios.service";
function Dashboard() {
  const [sucursales, setsucursales] = useState([]);
  // const [sucursaleseleccionada, setsucursaleseleccionada] = useState("0");
  const [empleados, setEmpleados] = useState([]);

  // const handleCategoriaChange = (value) => {
  //   setsucursaleseleccionada(value);
  // };

  useEffect(() => {
    const cargarEmpleados = async () => {
      try {
        const data = await empleadosService.getAll();

        setEmpleados(data);
      } catch (error) {
        console.error(error);
      }
    };

    cargarEmpleados();
  }, []);
  useEffect(() => {
    if (empleados.length === 0) return;

    const cargarDatosCompletos = async () => {
      try {
        const empleadosConDatos: any = await Promise.all(
          empleados.map(async (empleado: any) => {
            const datosUsuario = await userService.getUserById(
              empleado.id_usuario
            );
            const datosSucursal = await sucursalesService.getById(
              empleado.sucursal_id
            );
            return {
              ...empleado,
              sucursal_id: datosSucursal,
              id_usuario: datosUsuario,
            };
          })
        );
        setEmpleados(empleadosConDatos);
      } catch (error) {
        console.error(error);
      }
    };

    cargarDatosCompletos();
  }, [empleados.length]);

  console.log(empleados);
  const cantidadEmpleados = empleados.length;
  useEffect(() => {
    const cargarsucursales = async () => {
      try {
        const data = await sucursalesService.getAll();

        setsucursales(data);
      } catch (error) {
        console.error(error);
      }
    };

    cargarsucursales();
  }, []);
  const cantidadVendedores = empleados.filter(
    (empleado: any) => empleado.rol.toLowerCase() === "vendedor"
  ).length;
  const cantidadBodegueros = empleados.filter(
    (empleado: any) => empleado.rol.toLowerCase() === "bodeguero"
  ).length;
  const cantidadContadores = empleados.filter(
    (empleado: any) => empleado.rol.toLowerCase() === "contador"
  ).length;
  const ventasTotales = sucursales.reduce((acum: any, sucursal: any) => {
    return acum + sucursal.ventas_totales;
  }, 0);
  const pedidosTotales = sucursales.reduce((acum: any, sucursal: any) => {
    return acum + sucursal.pedidos;
  }, 0);
  const ventasFormateadas = ventasTotales.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Ventas Totales
            </h3>
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
              className="lucide lucide-dollar-sign h-4 w-4 text-muted-foreground"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{ventasFormateadas}</div>
            {/* <p className="text-xs text-muted-foreground">
              +16% desde el mes pasado
            </p> */}
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Pedidos</h3>
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
              className="lucide lucide-package h-4 w-4 text-muted-foreground"
            >
              <path d="m7.5 4.27 9 5.15"></path>
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
              <path d="m3.3 7 8.7 5 8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{pedidosTotales}</div>
            {/* <p className="text-xs text-muted-foreground">+8% desde el mes pasado</p> */}
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Usuarios Activos
            </h3>
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
              className="lucide lucide-users h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{cantidadEmpleados}</div>
            {/* <p className="text-xs text-muted-foreground">+3 nuevos esta semana</p> */}
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Sucursales</h3>
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
              className="lucide lucide-store h-4 w-4 text-muted-foreground"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
              <path d="M2 7h20"></path>
              <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{sucursales.length - 2}</div>
            <p className="text-xs text-muted-foreground">Todas operativas</p>
          </div>
        </div>
      </div>
      <div className=" h-10 items-center justify-center text-muted-foreground rounded-md p-1">
        <Tabs defaultValue="ventasPorTienda" className="w-full  pb-10">
          <TabsList>
            <TabsTrigger value="ventasPorTienda" className="cursor-pointer">
              Ventas por tienda
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="desempeño">
              Desempeño
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="gestionUsuarios">
              Gestión de usuarios
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="promociones">
              Promociones
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ventasPorTienda">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Desempeño por Sucursal
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ventas y pedidos del último mes por cada sucursal
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {sucursales.map((sucursal: any) => (
                    <div
                      key={sucursal.id_sucursal}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-store h-8 w-8 text-blue-600"
                        >
                          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                          <path d="M2 7h20"></path>
                          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                        </svg>
                        <div>
                          <h3 className="font-semibold">{sucursal.nombre}</h3>
                          <p className="text-sm text-gray-600">
                            {sucursal.pedidos} pedidos
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">
                          {sucursal.ventas_totales.toLocaleString("es-CL", {
                            style: "currency",
                            currency: "CLP",
                            minimumFractionDigits: 0,
                          })}
                        </p>
                        {/* <div className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-trending-up h-4 w-4 text-green-600"
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          <span className="text-sm text-green-600">+12%</span>
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="desempeño">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Análisis de Desempeño
                </h3>
                <p className="text-sm text-muted-foreground">
                  Métricas clave de rendimiento por sucursal
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-6">
                  {/* <div className="grid md:grid-cols-3 gap-4">
                    <div
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                      data-v0-t="card"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">
                          Ticket Promedio
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">$134.500</div>
                        <p className="text-xs text-green-600">
                          +5.2% vs mes anterior
                        </p>
                      </div>
                    </div>
                    <div
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                      data-v0-t="card"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">
                          Tasa de Conversión
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">3.8%</div>
                        <p className="text-xs text-green-600">
                          +0.5% vs mes anterior
                        </p>
                      </div>
                    </div>
                    <div
                      className="rounded-lg border bg-card text-card-foreground shadow-sm"
                      data-v0-t="card"
                    >
                      <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">
                          Productos por Pedido
                        </h3>
                      </div>
                      <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">4.2</div>
                        <p className="text-xs text-green-600">
                          +0.3 vs mes anterior
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="space-y-4">
                    {}
                    <h3 className="text-lg font-semibold">
                      Comparativa de Sucursales
                    </h3>
                    <div className="space-y-4">
                      {sucursales.map((sucursal: any) => (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">
                              Sucursal {sucursal.nombre}
                            </span>
                            <span className="text-sm">
                              {sucursal.ventas_totales.toLocaleString("es-CL", {
                                style: "currency",
                                currency: "CLP",
                                minimumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                          <Slider
                            defaultValue={[sucursal.ventas_totales]}
                            max={30000000}
                            step={1}
                            disabled
                            className="[&_[role=slider]]:hidden"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gestionUsuarios">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-black">
                  Gestión de Usuarios
                </h2>
                <a
                  href="/admin/users"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-user-plus h-4 w-4 mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                  Crear Usuario
                </a>
              </div>
              <div className="grid gap-4">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Usuarios
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      {empleados.map((empleado: any) => (
                        <div
                          key={empleado.id_usuario.id_usuario}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <h3 className="font-semibold">
                              {empleado.id_usuario.nombre}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {empleado.rol} - {empleado.sucursal_id.nombre}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                              data-v0-t="badge"
                            >
                              Activo
                            </div>
                            <a
                              href="/admin/users/1"
                              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                            >
                              Editar
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">
                        Vendedores
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-3xl font-bold mb-2">
                        {cantidadVendedores}
                      </div>
                      <a
                        href="/admin/users?role=vendedor"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                      >
                        Gestionar Vendedores
                      </a>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">
                        Bodegueros
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-3xl font-bold mb-2">
                        {cantidadBodegueros}
                      </div>
                      <a
                        href="/admin/users?role=bodeguero"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                      >
                        Gestionar Bodegueros
                      </a>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold tracking-tight text-lg">
                        Contadores
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-3xl font-bold mb-2">
                        {cantidadContadores}
                      </div>
                      <a
                        href="/admin/users?role=contador"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                      >
                        Gestionar Contadores
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="promociones">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Promociones y Estrategias de Venta
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Crea y gestiona promociones para impulsar las ventas
                    </p>
                  </div>
                  <a
                    href="/admin/promotions"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  >
                    Crear Nueva Promoción
                  </a>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">
                          Descuento Black Friday
                        </h3>
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                          data-v0-t="badge"
                        >
                          Activa
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        20% de descuento en productos seleccionados
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">
                          Válida hasta: 30/11/2024
                        </p>
                        <a
                          href="/admin/promotions/1"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        >
                          Editar
                        </a>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">Envío Gratis</h3>
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          data-v0-t="badge"
                        >
                          Programada
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Envío gratuito en compras sobre $50.000
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">
                          Inicia: 01/12/2024
                        </p>
                        <a
                          href="/admin/promotions/2"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        >
                          Editar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
