let urlHeroku = process.env.REACT_APP_URL;
const productosService = {
  async obtenerProductos() {
    const url = "http://localhost:8080/producto";
    const response = await fetch(url || urlHeroku + "/producto", {
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
    const response = await fetch(url || urlHeroku + "/producto", {
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
    const response = await fetch(url || urlHeroku + "/producto/" + id, {
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
    const response = await fetch(
      url || urlHeroku + "/proveedor/" + id + "/producto",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  },
  async obtenerProductosPage(page) {
    const url = "http://localhost:8080/producto/page/" + page;
    const response = await fetch(url || urlHeroku + "/producto/page/" + page, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
};

export default productosService;
