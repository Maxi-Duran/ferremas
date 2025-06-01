import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Pagos Pendientes
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
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Por confirmar</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Pagos Confirmados Hoy
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
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">$12.450.000</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Entregas por Registrar
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
              className="lucide lucide-file-text h-4 w-4 text-muted-foreground"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Pendiente</p>
          </div>
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">
              Ingresos del Mes
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
            <div className="text-2xl font-bold">$85.2M</div>
            <p className="text-xs text-muted-foreground">
              +22% vs mes anterior
            </p>
          </div>
        </div>
      </div>
      <div className=" h-10 items-center justify-center text-muted-foreground rounded-md p-1">
        <Tabs defaultValue="confirmacionPagos" className="w-full  pb-10">
          <TabsList>
            <TabsTrigger value="confirmacionPagos" className="cursor-pointer">
              Confirmacion de Pagos
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="registroEntregas">
              Registro de Entregas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="confirmacionPagos">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Pagos por Transferencia Pendientes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Confirma los pagos recibidos por transferencia bancaria
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">PAY-001</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-005</p>
                        <p className="text-sm text-gray-600">
                          Cliente: Constructora Nuevo Horizonte
                        </p>
                        <p className="text-sm text-gray-600">
                          Fecha: 2024-01-15
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        data-v0-t="badge"
                      >
                        Pendiente Confirmación
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Método de Pago:</p>
                        <p className="text-sm text-gray-600">Transferencia</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cuenta Bancaria:</p>
                        <p className="text-sm text-gray-600">
                          Banco de Chile - 98765432-1
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Número de Referencia:
                        </p>
                        <p className="text-sm text-gray-600">
                          TRF-20240115-001
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Monto:</p>
                        <p className="text-lg font-bold">$450.000</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant={"secondary"}
                        className="cursor-pointer text-white bg-emerald-600"
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
                          className="lucide lucide-circle-check h-4 w-4 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Confirmar Pago
                      </Button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-file-text h-4 w-4 mr-2"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        Ver Comprobante
                      </Button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-credit-card h-4 w-4 mr-2"
                        >
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="5"
                            rx="2"
                          ></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                        Verificar en Banco
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">PAY-002</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-006</p>
                        <p className="text-sm text-gray-600">
                          Cliente: Ferretería San Miguel
                        </p>
                        <p className="text-sm text-gray-600">
                          Fecha: 2024-01-15
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        data-v0-t="badge"
                      >
                        Pendiente Confirmación
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Método de Pago:</p>
                        <p className="text-sm text-gray-600">Transferencia</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Cuenta Bancaria:</p>
                        <p className="text-sm text-gray-600">
                          Banco Santander - 12345678-9
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          Número de Referencia:
                        </p>
                        <p className="text-sm text-gray-600">
                          TRF-20240115-002
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Monto:</p>
                        <p className="text-lg font-bold">$280.000</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant={"secondary"}
                        className="cursor-pointer bg-emerald-600 text-white"
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
                          className="lucide lucide-circle-check h-4 w-4 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Confirmar Pago
                      </Button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-file-text h-4 w-4 mr-2"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        Ver Comprobante
                      </Button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-credit-card h-4 w-4 mr-2"
                        >
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="5"
                            rx="2"
                          ></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                        Verificar en Banco
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="registroEntregas">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Registro de Entregas a Clientes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Registra las entregas completadas para finalizar las
                  transacciones
                </p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">DEL-001</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-003</p>
                        <p className="text-sm text-gray-600">
                          Cliente: Constructora Los Andes
                        </p>
                        <p className="text-sm text-gray-600">
                          Fecha Entrega: 2024-01-15 a las 14:30
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                        data-v0-t="badge"
                      >
                        Entregado
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Producto:</p>
                        <p className="text-sm text-gray-600">
                          Kit Herramientas Stanley
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Valor:</p>
                        <p className="text-lg font-bold">$229.950</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Recibido por:</p>
                        <p className="text-sm text-gray-600">Juan Pérez</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Conductor:</p>
                        <p className="text-sm text-gray-600">
                          Roberto Conductor
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">
                        Fotos de Confirmación:
                      </p>
                      <div className="flex space-x-2">
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
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
                            className="lucide lucide-camera h-3 w-3 mr-1"
                          >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                            <circle cx="12" cy="13" r="3"></circle>
                          </svg>
                          entrega_001.jpg
                        </div>
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
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
                            className="lucide lucide-camera h-3 w-3 mr-1"
                          >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                            <circle cx="12" cy="13" r="3"></circle>
                          </svg>
                          firma_001.jpg
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-file-text h-4 w-4 mr-2"
                        >
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        Ver Registro
                      </Button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-camera h-4 w-4 mr-2"
                        >
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                          <circle cx="12" cy="13" r="3"></circle>
                        </svg>
                        Ver Fotos
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">DEL-002</h3>
                        <p className="text-sm text-gray-600">Pedido: ORD-004</p>
                        <p className="text-sm text-gray-600">
                          Cliente: Maestro Constructor
                        </p>
                        <p className="text-sm text-gray-600">
                          Fecha Entrega: 2024-01-14 a las 16:45
                        </p>
                      </div>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        data-v0-t="badge"
                      >
                        Por Registrar
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Producto:</p>
                        <p className="text-sm text-gray-600">
                          Taladro Bosch GSB 13 RE
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Valor:</p>
                        <p className="text-lg font-bold">$89.990</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Recibido por:</p>
                        <p className="text-sm text-gray-600">María González</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Conductor:</p>
                        <p className="text-sm text-gray-600">Ana Conductora</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">
                        Fotos de Confirmación:
                      </p>
                      <div className="flex space-x-2">
                        <div
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                          data-v0-t="badge"
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
                            className="lucide lucide-camera h-3 w-3 mr-1"
                          >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                            <circle cx="12" cy="13" r="3"></circle>
                          </svg>
                          entrega_002.jpg
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
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
                          className="lucide lucide-circle-check h-4 w-4 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Registrar Entrega
                      </button>
                      <Button variant={"secondary"} className="cursor-pointer">
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
                          className="lucide lucide-camera h-4 w-4 mr-2"
                        >
                          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                          <circle cx="12" cy="13" r="3"></circle>
                        </svg>
                        Ver Fotos
                      </Button>
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
