import React from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

function Checkout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <a
        href="/cart"
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
        Volver al carrito
      </a>
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
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
                  className="lucide lucide-map-pin h-5 w-5 mr-2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Información de Envío
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="apellido">Apellido</Label>
                  <Input id="apellido" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="telefono">Telefono</Label>
                <Input id="telefono" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="direccion">Direccion</Label>
                <Input id="direccion" />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="ciudad">Ciudad</Label>
                  <Input id="ciudad" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="region">Region</Label>
                  <Input id="region" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="codigoPostal">Codigo Postal</Label>
                  <Input id="codigoPostal" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="region">Notas de entrega (opcional)</Label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm "
                  id="notes"
                  placeholder="Instrucciones especiales para la entrega..."
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
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
                  className="lucide lucide-credit-card h-5 w-5 mr-2"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
                Método de Pago
              </h3>
            </div>
            <div className="p-6 pt-0">
              <RadioGroup defaultValue="comfortable" className="grid gap-2">
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem
                    value="default"
                    id="r1"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary"
                  />
                  <Label
                    htmlFor="r1"
                    className="flex-1 cursor-pointer text-sm font-medium leading-none"
                  >
                    <div>
                      <p className="font-medium">Transferencia Bancaria</p>
                      <p className="text-sm text-gray-600">
                        Realiza una transferencia a nuestra cuenta bancaria
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem
                    value="comfortable"
                    id="r2"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary"
                  />
                  <Label
                    htmlFor="r2"
                    className="flex-1 cursor-pointer text-sm font-medium leading-none"
                  >
                    <div>
                      <p className="font-medium">Tarjeta de Crédito/Débito</p>
                      <p className="text-sm text-gray-600">
                        Paga con Visa, Mastercard o American Express
                      </p>
                    </div>
                  </Label>
                </div>

                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem
                    value="compact"
                    id="r3"
                    className="aspect-square h-4 w-4 rounded-full border border-primary text-primary"
                  />
                  <Label
                    htmlFor="r3"
                    className="flex-1 cursor-pointer text-sm font-medium leading-none"
                  >
                    <div>
                      <p className="font-medium">Pago Contra Entrega</p>
                      <p className="text-sm text-gray-600">
                        Paga en efectivo al recibir tu pedido
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
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
                  className="lucide lucide-truck h-5 w-5 mr-2"
                >
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                  <path d="M15 18H9"></path>
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                  <circle cx="7" cy="18" r="2"></circle>
                </svg>
                Opciones de Envío
              </h3>
              <div className="p-6 pt-0">
                <RadioGroup defaultValue="send1" className="grid gap-2">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem
                      value="send1"
                      id="s1"
                      className="aspect-square h-4 w-4 rounded-full border border-primary text-primary"
                    />
                    <Label
                      htmlFor="s1"
                      className="flex-1 cursor-pointer text-sm font-medium leading-none"
                    >
                      <div>
                        <p className="font-medium">Envío a domicilio</p>
                        <p className="text-sm text-gray-600">
                          3-5 días hábiles
                        </p>
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2 p-4 border rounded-lg">
                    <RadioGroupItem
                      value="send2"
                      id="s2"
                      className="aspect-square h-4 w-4 rounded-full border border-primary text-primary"
                    />
                    <Label
                      htmlFor="s2"
                      className="flex-1 cursor-pointer text-sm font-medium leading-none"
                    >
                      <div>
                        <p className="font-medium">Envío Express</p>
                        <p className="text-sm text-gray-600">
                          1-2 días hábiles
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm sticky top-4"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Resumen del Pedido
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">IMG</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">
                      Taladro Percutor Bosch GSB 13 RE
                    </h4>
                    <p className="text-sm text-gray-600">Cantidad: 1</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$89.990</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">IMG</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-2">
                      Kit Herramientas Stanley 65 Piezas
                    </h4>
                    <p className="text-sm text-gray-600">Cantidad: 2</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">$91.980</p>
                  </div>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>$181.970</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Envío:</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full"
                ></div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span>$181.970</span>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium  bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
                Confirmar Pedido
              </button>
              <p className="text-xs text-gray-500 text-center">
                Al confirmar tu pedido, aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
