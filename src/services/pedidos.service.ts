import url from "../environment";

const pedidosService = {
  getAll: async () => {
    const response = await fetch(`${url.apiUrl}/pedidos/`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

export default pedidosService;
