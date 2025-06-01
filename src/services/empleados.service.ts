import url from "../environment";

const empleadoService = {
  login: async (credentials: any) => {
    const response = await fetch(`${url.apiUrlUsers}/empleados/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },

  getAll: async () => {
    const response = await fetch(`${url.apiUrlUsers}/empleados`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getById: async (id: any) => {
    const response = await fetch(`${url.apiUrlUsers}/empleados/${id}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default empleadoService;
