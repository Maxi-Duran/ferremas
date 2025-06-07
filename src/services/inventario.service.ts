import url from "../environment";

const inventarioService = {
  getAll: async () => {
    const response = await fetch(`${url.apiUrl}/inventario`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getById: async (id: any) => {
    const response = await fetch(`${url.apiUrl}/inventario/${id}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  create: async (data: any) => {
    const response = await fetch(`${url.apiUrl}/inventario`, {
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

export default inventarioService;
