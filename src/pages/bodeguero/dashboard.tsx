import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import pedidosService from "../../services/pedidos.service";
import productosService from "../../services/products.service";
import userService from "../../services/usuarios.service";

import inventarioService from "../../services/inventario.service";

function Dashboard() {
  const [pedidos, setPedidos] = useState([]);

  const [inventario, setInventario] = useState([]);
  const [createInventario, setCreateInventario] = useState({
    producto_id: "",
    stock_actual: "",
    sucursal_id: localStorage.getItem("sucursal"),
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await inventarioService.create(createInventario);
    alert("Inventario creado");
  };
  const handleInventarioChange = (e: any) => {
    const { name, value } = e.target;
    setCreateInventario((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductoChange = (value: string) => {
    setCreateInventario((prev) => ({
      ...prev,
      producto_id: value,
    }));
    console.log("Producto seleccionado:", value);
  };

  useEffect(() => {
    const cargarPedidosCompletos = async () => {
      try {
        const pedidos = await pedidosService.getAll();

        const pedidosConDatos: any = await Promise.all(
          pedidos.map(async (pedido: any) => {
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
    const cargarInventario = async () => {
      try {
        const inventarioPlano = await inventarioService.getAll();

        const sucursalActual = parseInt(
          localStorage.getItem("sucursal") || "0"
        );

        const inventarioFiltrado = inventarioPlano.filter(
          (item: any) => item.sucursal_id === sucursalActual
        );

        const inventarioConProducto: any = await Promise.all(
          inventarioFiltrado.map(async (item: any) => {
            const producto = await productosService.productoById(
              item.producto_id
            );

            return {
              ...item,
              producto_id: producto,
            };
          })
        );

        setInventario(inventarioConProducto);
      } catch (error) {
        console.error("Error al cargar inventario:", error);
      }
    };

    cargarInventario();
  }, []);

  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosObtenidos = await productosService.getAll();
        setProductos(productosObtenidos);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    cargarProductos();
  }, []);

  console.log("inventarioi", inventario);
  console.log("create", createInventario);
  console.log(pedidos);

  const pedidosAprobados = pedidos.filter(
    (pedido: any) => pedido.estado === "Aprobado"
  );

  const pedidosDespachados = pedidos.filter(
    (pedido: any) => pedido.estado === "Despachado"
  );
  const pedidosPendientes = pedidos.filter(
    (pedido: any) => pedido.estado === "Creado"
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
            <div className="text-2xl font-bold"></div>
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
                {pedidosAprobados.map((pedido: any) => (
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
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-1,5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Control de Inventario
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Monitorea el stock y movimientos de productos
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger>Crear inventario</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Crear Inventario</DialogTitle>
                      <DialogDescription asChild>
                        <div>
                          <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 w-full gap-2">
                              <Select onValueChange={handleProductoChange}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Selecciona un producto" />
                                </SelectTrigger>
                                <SelectContent>
                                  {productos.map((producto) => (
                                    <SelectItem
                                      key={producto.id_producto}
                                      value={String(producto.id_producto)}
                                    >
                                      {producto.nombre}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>

                              <div className="flex flex-col gap-2">
                                <Label>Stock</Label>
                                <Input
                                  type="number"
                                  name="stock_actual"
                                  onChange={handleInventarioChange}
                                />
                              </div>
                            </div>

                            <div className="w-full mt-2 flex justify-end">
                              <Button type="submit">Crear producto</Button>
                            </div>
                          </form>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
                  {inventario.map((inventario: any) => (
                    <div
                      key={inventario.id_inventario}
                      className="p-4 border rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">
                            {inventario.producto_id[0].nombre}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {inventario.producto_id[0].codigo_sku}
                          </p>
                        </div>
                        <div className="text-right">
                          <div
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground mb-2"
                            data-v0-t="badge"
                          ></div>
                          <p className="text-sm font-medium">
                            Stock: {inventario.stock_actual}
                          </p>
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
                  ))}
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
