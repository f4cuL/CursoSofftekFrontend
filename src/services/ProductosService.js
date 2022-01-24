const productosService = {
  async obtenerProductos() {
    const url = "http://localhost:8080/producto";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },
  async editarProducto(id, data) {
    const url = "http://localhost:8080/producto/" + id;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response;
  },
  async borrarProducto(id) {
    const url = "http://localhost:8080/producto/" + id;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
  async agregarProducto(data, id) {
    const url = `http://localhost:8080/proveedor/${id}/producto`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
};

export default productosService;
