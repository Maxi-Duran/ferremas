import url from "../environment";

const categoriaService = {
  getCategorias: async () => {
    const response = await fetch(`${url.apiUrl}/categorias`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
  getById: async (id: any) => {
    const response = await fetch(`${url.apiUrl}/categorias/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default categoriaService;
