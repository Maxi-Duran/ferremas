import url from "../environment";

const sucursalesService = {
  // Obtener todas las sucursales
  getAll: async () => {
    const response = await fetch(`${url.apiUrl}/sucursales/`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getById: async (id: any) => {
    const response = await fetch(`${url.apiUrl}/sucursales/${id}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default sucursalesService;
