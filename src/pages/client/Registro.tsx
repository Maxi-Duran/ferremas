import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";

import { useState } from "react";

import userService from "../../services/usuarios.service";
function Registro() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena_hash: "",
  });

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await userService.create(user);
  };
  console.log(user);
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div>
          <a
            href="/"
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
            Volver al inicio
          </a>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 text-center">
            <h3 className="font-semibold tracking-tight text-2xl">
              Crear una cuenta en FERREMAS
            </h3>
            <p className="text-sm text-muted-foreground">
              Regístrate para acceder a precios especiales, seguimiento de
              pedidos y más
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="mb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium leading-none ">
                      Nombre
                    </Label>
                    <Input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground "
                      id="nombre"
                      placeholder="Ingresa tu nombre"
                      name="nombre"
                      value={user.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Apellido
                    </Label>
                    <Input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground "
                      id="apellido"
                      placeholder="Ingresa tu apellido"
                      name="apellido"
                      value={user.apellido}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium leading-none ">
                    Correo
                  </Label>
                  <Input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground "
                    id="correo"
                    placeholder="Ingresa tu correo"
                    name="correo"
                    value={user.correo}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="space-y-2">
                    <Label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="rut"
                    >
                      Rut
                    </Label>
                    <Input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground "
                      id="rut"
                      placeholder="Ingresa tu rut"
                      name="rut"
                      value={user.rut}
                      onChange={handleChange}
                    />
                  </div> */}

                <div className="space-y-2">
                  <Label className="text-sm font-medium leading-none ">
                    Contraseña
                  </Label>
                  <Input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  placeholder:text-muted-foreground  "
                    id="contrasena_hash"
                    placeholder="************"
                    name="contrasena_hash"
                    type="password"
                    value={user.contrasena_hash}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label>
                    Acepto los términos y condiciones y la política de
                    privacidad
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="emails" onChange={handleChange} />
                  <Label>
                    Quiero recibir emails de la empresa ofreciendome ofertas
                  </Label>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Crear Cuenta
                </button>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                      Iniciar Sesión
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
