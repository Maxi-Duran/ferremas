import { Input } from "../../components/ui/input";
function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Todo para tu construccion
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Desde 1980 ofreciendo las mejores herramientas y materiales de
            construcción con marcas reconocidas como Bosch, Makita, Stanley y
            Sika
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
              Ver Catálogo
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-truck h-12 w-12 mx-auto mb-4 text-blue-600"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Envío a Obra</h3>
              <p className="text-gray-600">
                Entrega directa en tu proyecto de construcción
              </p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                className="lucide lucide-shield h-12 w-12 mx-auto mb-4 text-blue-600"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Garantía de Calidad
              </h3>
              <p className="text-gray-600">
                Productos de marcas reconocidas del sector
              </p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                className="lucide lucide-phone h-12 w-12 mx-auto mb-4 text-blue-600"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Asesoría Técnica</h3>
              <p className="text-gray-600">
                Expertos en construcción y ferretería
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Productos Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-[90%] mx-auto">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            data-v0-t="card"
          >
            <div className="relative">
              <div className="w-[300px] h-[300px]"></div>
              <div
                className="inline-flex text-white bg-red-500 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold  hover:bg-destructive/80 absolute top-2 left-2"
                data-v0-t="badge"
              >
                Oferta
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-lg">
                Taladro Percutor Bosch GSB 13 RE
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="text-sm ml-1">4.8</span>
                </div>
                <span className="text-sm text-gray-500">(124 reseñas)</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">$89.990</span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    $109.990
                  </span>
                </div>
              </div>
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
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            data-v0-t="card"
          >
            <div className="relative">
              <div className="w-[300px] h-[300px]"></div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/80 absolute top-2 left-2"
                data-v0-t="badge"
              >
                Nuevo
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-lg">
                Sierra Circular Makita 5007F
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="text-sm ml-1">4.9</span>
                </div>
                <span className="text-sm text-gray-500">(89 reseñas)</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">$159.990</span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
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
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            data-v0-t="card"
          >
            <div className="relative">
              <div className="w-[300px] h-[300px]"></div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold  bg-primary text-primary-foreground hover:bg-primary/80 absolute top-2 left-2"
                data-v0-t="badge"
              >
                Destacado
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold tracking-tight text-lg">
                Kit Herramientas Stanley 65 Piezas
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="text-sm ml-1">4.7</span>
                </div>
                <span className="text-sm text-gray-500">(256 reseñas)</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">$45.990</span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    $59.990
                  </span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
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
      </section>
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Suscríbete a Nuestras Ofertas
          </h2>
          <p className="text-gray-300 mb-8">
            Recibe las mejores promociones y lanzamientos directamente en tu
            email
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Tu email"
              className="flex-1 px-4 bg-white py-2 rounded-lg text-black"
              type="email"
            />
            <button className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FERREMAS</h3>
              <p className="text-gray-300">
                Tu distribuidora de confianza desde 1980
              </p>
              <p className="text-gray-300 text-sm mt-2">
                7 sucursales en Chile
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/catalog">Catálogo</a>
                </li>
                <li>
                  <a href="/offers">Ofertas</a>
                </li>
                <li>
                  <a href="/contact">Contacto</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/help">Ayuda</a>
                </li>
                <li>
                  <a href="/returns">Devoluciones</a>
                </li>
                <li>
                  <a href="/warranty">Garantía</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-gray-300">Email: ventas@ferremas.cl</p>
              <p className="text-gray-300">Teléfono: +56 2 2345 6789</p>
              <p className="text-gray-300">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
