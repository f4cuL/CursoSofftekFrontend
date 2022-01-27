const ProveedoresService = {
  async obtenerProveedores() {
    const url = "http://localhost:8080/proveedor";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },
  async obtenerProveedoresPag(pagina) {
    const url = "http://localhost:8080/proveedor/page/" + pagina;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
    });
    const data = await response.json();
    return data;
  },
  async borrarProveedor(id) {
    const url = "http://localhost:8080/proveedor/" + id;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
  async agregarProveedor(data) {
    const url = "http://localhost:8080/proveedor";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    });
    return await response;
  },
  async editarProveedor(data, id) {
    const url = "http://localhost:8080/proveedor/" + id;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    });
    return await response;
  },
  async obtenerProveedorPorID(id) {
    const url = "http://localhost:8080/proveedor/" + id;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
  async obtenerProductoProveedorPorIDPaginated(id, page) {
    const url = "http://localhost:8080/proveedor/" + id + "/producto/" + page;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  },
  async obtenerCategoriasPorIdProveedor(id) {
    const url = "http://localhost:8080/proveedor/" + id + "/categoria";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  },
  async eliminarCategoriaDeProveedor(idProveedor, idCategoria) {
    const url =
      "http://localhost:8080/proveedor/" +
      idProveedor +
      "/categoria/" +
      idCategoria;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
  async obtenerCategorias() {
    const url = "http://localhost:8080/categoria/";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
    });
    return await response;
  },
  async agregarCategoriaAProveedor(idProveedor, idCategoria) {
    const url =
      "http://localhost:8080/proveedor/" +
      idProveedor +
      "/categoria/" +
      idCategoria;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response;
  },
};

export default ProveedoresService;
