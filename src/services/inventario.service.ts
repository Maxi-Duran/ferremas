import url from "../environment";

const inventarioService = {
  productoById: async (id_producto: number) => {
    const response = await fetch(`${url.apiUrl}/inventario/${id_producto}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getAll: async () => {
    const response = await fetch(`${url.apiUrl}/inventario`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default inventarioService;
