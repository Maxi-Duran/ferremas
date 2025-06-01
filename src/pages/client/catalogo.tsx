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
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/ui/input";
import { useState, useEffect } from "react";
function Catalogo() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("0");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useState([]);
  //filter
  const handleCategoriaChange = (value: any) => {
    setCategoriaSeleccionada(value);
  };
  useEffect(() => {
    const filtrados = productos.filter(
      (producto: any) =>
        producto.activo &&
        (categoriaSeleccionada === "0" ||
          String(producto.categoria_id) === categoriaSeleccionada)
    );
    setProductosFiltrados(filtrados);
    setPaginaActual(1);
  }, [categoriaSeleccionada, productos]);

  //pagination
  const productosPorPagina = 10;

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  const productosPagina = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  //Llamada a lsitar productos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/apiBsnss/productos"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);
  //llamada listar categorias
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/apiBsnss/categorias"
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Productos</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
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

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Nombre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="2">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="3">Mejor valorados</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {productosPagina.map((producto: any) => (
          <div
            key={producto.id_producto}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            data-v0-t="card"
          >
            <div className="relative">
              <div className="w-32 h-32"></div>
              {/* <div
                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 absolute top-2 left-2"
                data-v0-t="badge"
              >
                Oferta
              </div>
              <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
                Stock: 15
              </div> */}
            </div>
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="flex items-center justify-between mb-2">
                <div
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                  data-v0-t="badge"
                >
                  {producto.marca}
                </div>
                <span className="text-xs text-gray-500">
                  SKU: {producto.codigo_sku}
                </span>
              </div>
              <h3 className="font-semibold tracking-tight text-lg line-clamp-2">
                {producto.nombre}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {producto.descripcion}
              </p>
              {/* <div class="flex items-center space-x-2">
                <div class="flex items-center">
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
                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span class="text-sm ml-1">4.8</span>
                </div>
                <span class="text-sm text-gray-500">(124)</span>
              </div> */}
            </div>
            <div className="p-6 pt-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xl font-bold">
                    {producto.preciosHistoricos}
                  </span>
                  {/* <span class="text-sm text-gray-500 line-through ml-2">
                    $109.990
                  </span> */}
                </div>
              </div>
              <div className="space-y-2 flex flex-col gap-2">
                <button
                  onClick={() => navigate(`/product/${producto.id_producto}`)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  Ver Detalles
                </button>

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
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
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10 w-[30%] float-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
                className={
                  paginaActual === 1 ? "pointer-events-none opacity-50" : ""
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
                  setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
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
  );
}

export default Catalogo;
