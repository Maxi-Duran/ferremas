import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "../../components/ui/pagination";
import pedidosService from "../../services/pedidos.service";
import { Input } from "../../components/ui/input";
import productosService from "../../services/products.service";
import userService from "../../services/usuarios.service";
import sucursalesService from "../../services/sucursales.service";
import categoriaService from "../../services/categorias.service";

import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
function Dashboard() {
  const [categorias, setCategorias] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("0");
  const [productos, setProductos] = useState([]);

  const [pedidos, setPedidos] = useState([]);

  useState([]);
  //filter
  const handleCategoriaChange = (value: any) => {
    setCategoriaSeleccionada(value);
  };
  //pagination
  const productosPorPagina = 10;

  const indexInicio = (paginaActual - 1) * productosPorPagina;
  const indexFin = indexInicio + productosPorPagina;
  const productosAMostrar = productos.slice(indexInicio, indexFin);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  //Llamada a lsitar productos
  useEffect(() => {
    const cargarproductosCompletos = async () => {
      try {
        const productos = await productosService.getAll();

        const productosConDatos: any = await Promise.all(
          productos.map(async (pedido: any) => {
            const categoria = await categoriaService.getById(
              pedido.categoria_id
            );

            return {
              ...pedido,
              categoria_id: categoria,
            };
          })
        );

        setProductos(productosConDatos);
      } catch (error) {
        console.error("Error al cargar pedidos:", error);
      }
    };

    cargarproductosCompletos();
  }, []);
  //llamada listar categorias
  useEffect(() => {
    categoriaService
      .getCategorias()
      .then((data) => {
        setCategorias(data);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    const cargarPedidosCompletos = async () => {
      try {
        const pedidos = await pedidosService.getAll();

        const pedidosConDatos: any = await Promise.all(
          pedidos.map(async (pedido: any) => {
            const sucursal = await sucursalesService.getById(
              pedido.sucursal_retiro
            );
            const cliente = await userService.getUserById(pedido.cliente_id);

            return {
              ...pedido,
              sucursal_retiro: sucursal,
              cliente_id: cliente,
            };
          })
        );

        setPedidos(pedidosConDatos);
      } catch (error) {
        console.error("Error al cargar pedidos:", error);
      }
    };

    cargarPedidosCompletos();
  }, []);
  console.log(pedidos);
  console.log(productos);
  const pedidosPendientes = pedidos.filter(
    (pedido: any) => pedido.estado === "Creado"
  );
  const pedidosAprobados = pedidos.filter(
    (pedido: any) => pedido.estado === "Aprobado"
  );

  const pedidosDespachados = pedidos.filter(
    (pedido: any) => pedido.estado === "Despachado"
  );
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Pedidos Pendientes
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
              className="lucide lucide-clock h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{pedidosPendientes.length}</div>
            <p className="text-xs text-muted-foreground">
              Requieren aprobación
            </p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Aprobados</h3>
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
              className="lucide lucide-circle-check h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{pedidosAprobados.length}</div>
            <p className="text-xs text-muted-foreground">Enviados a bodega</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">En Despacho</h3>
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
              className="lucide lucide-truck h-4 w-4 text-muted-foreground"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">
              {pedidosDespachados.length}
            </div>
            <p className="text-xs text-muted-foreground">Coordinando entrega</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Productos Activos
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
              className="lucide lucide-package h-4 w-4 text-muted-foreground"
            >
              <path d="m7.5 4.27 9 5.15"></path>
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
              <path d="m3.3 7 8.7 5 8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Disponibles para venta
            </p>
          </div>
        </div>
      </div>
      <div className=" h-10 items-center justify-center text-muted-foreground rounded-md p-1">
        <Tabs defaultValue="gestionPedidos" className="w-full  pb-10">
          <TabsList>
            <TabsTrigger value="gestionPedidos" className="cursor-pointer">
              Gestion de pedidos
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="prodDisponibles">
              Productos Disponibles
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="despachos">
              Coordinacion de Despachos
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="historial">
              Historial
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gestionPedidos">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Pedidos Pendientes de Aprobación
                </h3>
                <p className="text-sm text-muted-foreground">
                  Revisa y aprueba los pedidos de los clientes
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {pedidos
                    .filter((pedido: any) => pedido.estado === "Creado")
                    .map((pedido: any) => (
                      <div
                        key={pedido.id_pedido}
                        className="p-6 border rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">
                              {pedido.id_pedido}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Cliente: {pedido.cliente_id.nombre}{" "}
                              {pedido.cliente_id.apellido}
                            </p>
                            <p className="text-sm text-gray-600">
                              Email: {pedido.cliente_id.correo}
                            </p>

                            <p className="text-sm text-gray-600">
                              Fecha:{" "}
                              {new Date(pedido.fecha_pedido).toLocaleDateString(
                                "es-CL"
                              )}
                            </p>
                          </div>
                          <div className="text-right">
                            <div
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ml-2"
                              data-v0-t="badge"
                            >
                              {pedido.estado}
                            </div>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium">Producto:</p>
                            <p className="text-sm text-gray-600"></p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Cantidad:</p>
                            <p className="text-sm text-gray-600">2</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Total:</p>
                            <p className="text-sm font-bold">$179.980</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              Dirección de Entrega:
                            </p>
                            <p className="text-sm text-gray-600">
                              {pedido.direccion_entrega}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="bg-emerald-600">Aprobar</Button>
                          <Button variant="destructive">Rechazar</Button>
                          <Button variant="secondary">Ver detalles</Button>
                          <Button>Enviar a bodega</Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="prodDisponibles">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Productos Disponibles
                </h3>
                <p className="text-sm text-muted-foreground">
                  Visualiza el inventario disponible para la venta
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
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
                      className="lucide lucide-search absolute left-3 top-3 h-4 w-4 text-gray-400"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <Input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground pl-10"
                      placeholder="Buscar productos..."
                    />
                  </div>
                  <Select
                    onValueChange={handleCategoriaChange}
                    value={categoriaSeleccionada}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Todas las categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Todas las categorias</SelectItem>
                      {categorias.map((cat: any) => (
                        <SelectItem
                          key={cat.id_categoria}
                          value={String(cat.id_categoria)}
                        >
                          {cat.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-5 flex flex-col gap-5">
                  {productosAMostrar.map((producto: any) => (
                    <div
                      key={producto.id_producto}
                      className="p-4 border rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{producto.nombre}</h3>
                          <p className="text-sm text-gray-600">
                            Marca: {producto.marca}
                          </p>
                          <p className="text-sm text-gray-600">
                            Categoría: {producto.categoria_id.nombre}
                          </p>
                          <p className="text-sm text-gray-600">
                            Precio: {producto.preciosHistoricos}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium">Stock:</span>
                            <span
                              className={`text-sm font-bold ${
                                producto.stock < 10
                                  ? "text-red-600"
                                  : "text-green-600"
                              }`}
                            >
                              {producto.stock}
                            </span>
                          </div>
                          {/* <div
                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                            data-v0-t="badge"
                          >
                            Disponible
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() =>
                              setPaginaActual((prev) => Math.max(prev - 1, 1))
                            }
                            className={
                              paginaActual === 1
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>

                        {Array.from({ length: totalPaginas }).map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              isActive={paginaActual === i + 1}
                              onClick={() => setPaginaActual(i + 1)}
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() =>
                              setPaginaActual((prev) =>
                                Math.min(prev + 1, totalPaginas)
                              )
                            }
                            className={
                              paginaActual === totalPaginas
                                ? "pointer-events-none opacity-50"
                                : ""
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="despachos">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Coordinación de Despachos
                </h3>
                <p className="text-sm text-muted-foreground">
                  Coordina las entregas con el equipo de despacho
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">DEP-001</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-003</p>
                        <p className="text-sm text-gray-600">
                          Código de seguimiento: TRK-001
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                        data-v0-t="badge"
                      >
                        En Ruta
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Cliente:</p>
                        <p className="text-sm text-gray-600">Ana Martínez</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Dirección:</p>
                        <p className="text-sm text-gray-600">
                          Av. Providencia 1234, Santiago
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Estimado:</p>
                        <p className="text-sm text-gray-600">
                          Hoy 16:00 - 18:00
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Conductor:</p>
                        <p className="text-sm text-gray-600">
                          Roberto Conductor - +56 9 9876 5432
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button>Contactar Conductor</Button>
                      <Button>Modificar Horario</Button>
                      <Button>Ver Seguimiento</Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">DEP-002</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-004</p>
                        <p className="text-sm text-gray-600">
                          Código de seguimiento: TRK-002
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        data-v0-t="badge"
                      >
                        Programado
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Cliente:</p>
                        <p className="text-sm text-gray-600">Roberto López</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Dirección:</p>
                        <p className="text-sm text-gray-600">
                          Las Condes 5678, Santiago
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Estimado:</p>
                        <p className="text-sm text-gray-600">
                          Mañana 10:00 - 12:00
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Conductor:</p>
                        <p className="text-sm text-gray-600">
                          María Conductora - +56 9 5555 4444
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button>Contactar Conductor</Button>
                      <Button>Modificar Horario</Button>
                      <Button>Ver Seguimiento</Button>
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
