import React, { use } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "../../components/ui/pagination";
import categoriaService from "../../services/categorias.service";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import pedidosService from "../../services/pedidos.service";
import productosService from "../../services/products.service";
import userService from "../../services/usuarios.service";
function Dashboard() {
  const [pedidos, setPedidos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [productos, setProductos] = useState([]);

  const productosPorPagina = 10;

  console.log(productos);
  useEffect(() => {
    const cargarPedidosCompletos = async () => {
      try {
        const pedidos = await pedidosService.getAll();

        const pedidosConDatos = await Promise.all(
          pedidos.map(async (pedido) => {
            const cliente = await userService.getUserById(pedido.cliente_id);
            return {
              ...pedido,
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
  useEffect(() => {
    const cargarProductosCompletos = async () => {
      try {
        const productos = await productosService.getAll();
        const productosConDatos = await Promise.all(
          productos.map(async (pedido) => {
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
        console.error("Error al cargar productos", error);
      }
    };

    cargarProductosCompletos();
  }, []);

  const indexInicio = (paginaActual - 1) * productosPorPagina;
  const indexFin = indexInicio + productosPorPagina;
  const productosAMostrar = productos.slice(indexInicio, indexFin);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  console.log(pedidos);
  const productosBajoStock = productos.filter(
    (producto) => producto.stock < 10
  );

  const pedidosAprobados = pedidos.filter(
    (pedido) => pedido.estado === "Aprobado"
  );
  const pedidosRechazados = pedidos.filter(
    (pedido) => pedido.estado === "Cancelado"
  );
  const pedidosAbiertos = pedidos.filter(
    (pedido) => pedido.estado === "EnPrep"
  );
  const pedidosEntregados = pedidos.filter(
    (pedido) => pedido.estado === "Entregado"
  );
  const pedidosDespachados = pedidos.filter(
    (pedido) => pedido.estado === "Despachado"
  );
  const pedidosPendientes = pedidos.filter(
    (pedido) => pedido.estado === "Creado"
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
              Pedidos por Preparar
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
            <p className="text-xs text-muted-foreground">Recién aprobados</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              En Preparación
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
            <div className="text-2xl font-bold">{pedidosAprobados.length}</div>
            <p className="text-xs text-muted-foreground">Siendo empacados</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Listos para Entrega
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
              className="lucide lucide-circle-check h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">
              {pedidosDespachados.length}
            </div>
            <p className="text-xs text-muted-foreground">Esperando vendedor</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Productos Bajo Stock
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
              className="lucide lucide-triangle-alert h-4 w-4 text-muted-foreground"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">
              {productosBajoStock.length}
            </div>
            <p className="text-xs text-muted-foreground">
              Requieren reposición
            </p>
          </div>
        </div>
      </div>

      <div className=" h-10 items-center justify-center text-muted-foreground rounded-md p-1">
        <Tabs defaultValue="pedidosAprobados" className="w-full  pb-10">
          <TabsList>
            <TabsTrigger value="pedidosAprobados" className="cursor-pointer">
              Pedidos aprobados
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="gestionInventario">
              Gestion de inventarios
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="gestionProductos">
              Gestion de productos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pedidosAprobados">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Pedidos Aprobados por Vendedores
                </h3>
                <p className="text-sm text-muted-foreground">
                  Acepta y prepara los pedidos enviados desde ventas
                </p>
              </div>
              <div className="p-6 pt-0">
                {pedidosAprobados.map((pedido) => (
                  <div key={pedido.id_pedido} className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{pedido.id_pedido}</h3>
                          <p className="text-sm text-gray-600">
                            Cliente: {pedido.cliente_id.nombre}{" "}
                          </p>

                          <p className="text-sm text-gray-600">
                            Fecha:{" "}
                            {new Date(pedido.fecha_pedido).toLocaleDateString(
                              "es-CL"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium">Producto:</p>
                          <p className="text-sm text-gray-600"></p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Cantidad:</p>
                          <p className="text-sm text-gray-600"></p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button>
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
                            className="lucide lucide-package h-4 w-4 mr-2"
                          >
                            <path d="m7.5 4.27 9 5.15"></path>
                            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                            <path d="m3.3 7 8.7 5 8.7-5"></path>
                            <path d="M12 22V12"></path>
                          </svg>
                          Aceptar y preparar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gestionInventario">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Control de Inventario
                </h3>
                <p className="text-sm text-muted-foreground">
                  Monitorea el stock y movimientos de productos
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-4">
                <div>
                  <Label htmlFor="buscar"></Label>
                  <Input
                    id="buscar"
                    placeholder="Buscar productoS por nombre o SKU"
                  />
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">
                          Taladro Bosch GSB 13 RE
                        </h3>
                        <p className="text-sm text-gray-600">
                          SKU: BSH-GSB13RE
                        </p>
                        <p className="text-sm text-gray-600">
                          Ubicación: A1-B2
                        </p>
                        <p className="text-sm text-gray-600">
                          Último movimiento: 2024-01-15
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-2"
                          data-v0-t="badge"
                        >
                          Herramientas Eléctricas
                        </div>
                        <p className="text-sm font-medium">
                          Stock:{" "}
                          <span className="font-bold text-green-600">15</span>
                        </p>
                        <p className="text-xs text-gray-500">Mínimo: 5</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$89.990</span>
                      <div className="flex space-x-2">
                        <Button variant={"secondary"}>Ajustar Stock</Button>
                        <Button variant={"secondary"}>Ver Movimientos</Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">
                          Sierra Circular Makita 5007F
                        </h3>
                        <p className="text-sm text-gray-600">SKU: MKT-5007F</p>
                        <p className="text-sm text-gray-600">
                          Ubicación: A2-C1
                        </p>
                        <p className="text-sm text-gray-600">
                          Último movimiento: 2024-01-14
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-2"
                          data-v0-t="badge"
                        >
                          Herramientas Eléctricas
                        </div>
                        <p className="text-sm font-medium">
                          Stock:{" "}
                          <span className="font-bold text-green-600">8</span>
                        </p>
                        <p className="text-xs text-gray-500">Mínimo: 3</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$159.990</span>
                      <div className="flex space-x-2">
                        <Button variant={"secondary"}>Ajustar Stock</Button>
                        <Button variant={"secondary"}>Ver Movimientos</Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">Cemento Polpaico 25kg</h3>
                        <p className="text-sm text-gray-600">SKU: POL-CEM25</p>
                        <p className="text-sm text-gray-600">
                          Ubicación: D1-E3
                        </p>
                        <p className="text-sm text-gray-600">
                          Último movimiento: 2024-01-13
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-2"
                          data-v0-t="badge"
                        >
                          Materiales Construcción
                        </div>
                        <p className="text-sm font-medium">
                          Stock:{" "}
                          <span className="font-bold text-red-600">2</span>
                        </p>
                        <p className="text-xs text-gray-500">Mínimo: 10</p>
                        <div
                          className="inline-flex text-white items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 mt-1"
                          data-v0-t="badge"
                        >
                          Stock Bajo
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">$4990</span>
                      <div className="flex space-x-2">
                        <Button variant={"secondary"}>Ajustar Stock</Button>
                        <Button variant={"secondary"}>Ver Movimientos</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="gestionProductos">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-black">
                  Gestión de Productos
                </h2>
                <Button className="cursor-pointer flex items-center ">
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
                    className="lucide lucide-plus h-4 w-4 mr-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Agregar Producto
                </Button>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Lista de Productos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Gestiona el catálogo completo de productos
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    {productosAMostrar.map((producto) => (
                      <div
                        key={producto.id_producto}
                        className="p-4 border rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{producto.nombre}</h3>
                            <p className="text-sm text-gray-600">
                              SKU: {producto.codigo_sku}
                            </p>
                            <p className="text-sm text-gray-600">
                              Marca: {producto.marca}
                            </p>

                            <p className="text-sm text-gray-600">
                              {producto.descripcion}
                            </p>
                          </div>
                          <div className="text-right">
                            <div
                              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-2"
                              data-v0-t="badge"
                            >
                              {producto.categoria_id.nombre}
                            </div>
                            <p className="text-sm font-medium">
                              Stock: {producto.stock}
                            </p>
                            <p className="text-lg font-bold">
                              ${producto.preciosHistoricos}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant={"secondary"}
                            className="cursor-pointer"
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
                              className="lucide lucide-square-pen h-4 w-4 mr-2"
                            >
                              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                            </svg>
                            Editar
                          </Button>
                          <Button
                            variant={"secondary"}
                            className="cursor-pointer"
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
                              className="lucide lucide-trash2 h-4 w-4 mr-2"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              <line x1="10" x2="10" y1="11" y2="17"></line>
                              <line x1="14" x2="14" y1="11" y2="17"></line>
                            </svg>
                            Eliminar
                          </Button>
                          <Button
                            className="cursor-pointer "
                            variant={"secondary"}
                          >
                            Ver Historial
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
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
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
