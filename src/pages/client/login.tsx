import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import empleadoService from "../../services/empleados.service";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useState } from "react";
import userService from "../../services/usuarios.service";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
function Login() {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [empleado, setEmpleado] = useState({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e: any) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await userService.login(user);
    console.log(data);
    if (data.clientes) {
      console.log("es cliente");
      localStorage.setItem("user", data.clientes.id_usuario);
      navigate("/");
      window.location.reload();
    }
  };
  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    const data = await empleadoService.login(empleado);
    if (data.empleados) {
      console.log("es empleado");
      localStorage.setItem("user", data.empleados.id_usuario);
      localStorage.setItem("rol", data.empleados.rol);
      localStorage.setItem("sucursal", data.empleados.sucursal_id);
      if (data.empleados.rol === "Vendedor") {
        navigate("/vendedor/dashboard");
      } else if (data.empleados.rol === "Contador") {
        navigate("/contador/dashboard");
      } else if (data.empleados.rol === "Bodeguero") {
        navigate("/bodeguero/dashboard");
      } else if (data.empleados.rol === "Admin") {
        navigate("/admin/dashboard");
      }
    }
    console.log(data);
  };
  console.log(user);
  console.log(empleado);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50   ">
      <div className=" flex flex-col items-center mb-32 gap-10  ">
        <div className="flex flex-col gap-3 text-center">
          <h2 className=" text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="m text-sm text-gray-600">
            O{" "}
            <a
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              crear una cuenta nueva
            </a>
          </p>
        </div>
        <Tabs defaultValue="client" className="w-[500px] ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">Cliente</TabsTrigger>
            <TabsTrigger value="admin">Administrador</TabsTrigger>
          </TabsList>
          <TabsContent value="client">
            <Card className="min-h-[350px]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold ">
                  Acceso Cliente
                </CardTitle>
                <CardDescription>
                  Ingresa con tu email y contraseña
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="pass">Contraseña</Label>
                    <Input
                      id="pass"
                      name="pass"
                      type="password"
                      value={user.pass}
                      onChange={handleChange}
                    />
                  </div>

                  <CardFooter className="flex flex-col gap-10 mt-6 px-0">
                    <Button className="w-full" type="submit">
                      Iniciar sesión
                    </Button>
                    <a
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
            <div className="text-center mt-10">
              <a href="/" className="text-sm text-gray-600 hover:text-gray-500">
                ← Volver al inicio
              </a>
            </div>
          </TabsContent>
          <TabsContent value="admin">
            <Card className="min-h-[350px]">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold ">
                  Acceso Empleados
                </CardTitle>
                <CardDescription>
                  Ingresa con tu rut y contraseña
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form onSubmit={handleSubmit2}>
                  <div className="space-y-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={empleado.email}
                      onChange={handleChange2}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="pass">Contraseña</Label>
                    <Input
                      id="pass"
                      name="pass"
                      type="password"
                      value={empleado.pass}
                      onChange={handleChange2}
                    />
                  </div>

                  <CardFooter className="flex flex-col gap-10 mt-6 px-0">
                    <Button className="w-full" type="submit">
                      Iniciar sesión
                    </Button>
                    <a
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>{" "}
      </div>
    </div>
  );
}

export default Login;
