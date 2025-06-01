import url from "../environment";

const productosService = {
  productoById: async (id_producto: number) => {
    const response = await fetch(`${url.apiUrl}/productos/${id_producto}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getAll: async () => {
    const response = await fetch(`${url.apiUrl}/productos`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default productosService;
