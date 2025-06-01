import { useState, useEffect } from "react";
import productosService from "../../services/products.service";
import { useParams } from "react-router-dom";
function DetalleProducto() {
  const { id } = useParams();
  interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    imagen: string;
    marca: string;
    codigo_sku: string;
    activo: boolean;
    precioshistoricos: number;
  }

  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (id) {
      productosService
        .productoById(Number(id))
        .then((data) => {
          setProducto(data[0]);
        })
        .catch(console.error);
    }
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <a href="/" className="hover:text-blue-600">
          Inicio
        </a>
        <span>/</span>
        <a href="/catalog" className="hover:text-blue-600">
          Catálogo
        </a>

        <span>/</span>
        <span className="text-gray-900">{producto.nombre}</span>
      </div>
      <a
        href="/catalog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
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
          className="lucide lucide-arrow-left h-4 w-4 mr-2"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Volver al catálogo
      </a>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="w-full h-[500px] rounded-lg border"></div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-blue-500"></div>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-gray-200"></div>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-gray-200"></div>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-gray-200"></div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            {/* <div
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 mb-2"
              data-v0-t="badge"
            >
              Oferta
            </div> */}
            <div className="flex items-center justify-between mb-2">
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-foreground text-sm"
                data-v0-t="badge"
              >
                {producto.marca}
              </div>
              <span className="text-sm text-gray-500">
                {producto.codigo_sku}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{producto.nombre}</h1>
            {/* <p className="text-sm text-gray-600 mt-1">Código: FER-20001</p> */}
            {/* <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center">
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
                  className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
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
                  className="lucide lucide-star h-5 w-5 text-gray-300"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="ml-2 text-sm">4.8</span>
              </div>
              <span className="text-sm text-gray-500">(124 reseñas)</span>
            </div> */}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">
                {producto.precioshistoricos}
              </span>
              {/* <span className="text-xl text-gray-500 line-through">
                $109.990
              </span> */}
            </div>
            <p className="text-green-600 font-medium">
              Stock disponible: {producto.stock}
            </p>
          </div>
          <p className="text-gray-700">{producto.descripcion}</p>
          <div className="space-y-4 p-6 bg-white rounded-lg border">
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium">Cantidad:</label>
              <div className="flex items-center space-x-2">
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
                    className="lucide lucide-minus h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
                <span className="w-12 text-center">1</span>
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
                    className="lucide lucide-plus h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
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
                  className="lucide lucide-shopping-cart h-5 w-5 mr-2"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                Agregar al Carrito
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 w-full">
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
                  className="lucide lucide-heart h-5 w-5 mr-2"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                Agregar a Favoritos
              </button>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm">
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
                  className="lucide lucide-truck h-4 w-4 text-green-600"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                <span>Envío gratis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
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
                  className="lucide lucide-shield h-4 w-4 text-blue-600"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span>Garantía 2 años</span>
              </div>
            </div> */}
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-lg">
                Contactar Vendedor
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-gray-600 mb-4">
                ¿Tienes preguntas sobre este producto? Contacta directamente con
                nuestro equipo de ventas.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
