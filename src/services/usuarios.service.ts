import url from "../environment";

//clientes
const userService = {
  login: async (credentials: any) => {
    const response = await fetch(`${url.apiUrlUsers}/clientes/login`, {
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

  getUserById: async (id: any) => {
    const response = await fetch(`${url.apiUrlUsers}/usuarios/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  create: async (data: any) => {
    const response = await fetch(`${url.apiUrlUsers}/clientes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },
};

export default userService;
