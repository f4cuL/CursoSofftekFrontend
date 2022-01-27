let urlHeroku = process.env.REACT_APP_URL;
const ProveedoresService = {
  async obtenerProveedores() {
    const url = "http://localhost:8080/proveedor";
    const response = await fetch(url || urlHeroku + "/proveedor", {
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
    const response = await fetch(
      url || urlHeroku + "/proveedor/page" + pagina,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.token,
        },
      }
    );
    const data = await response.json();
    return data;
  },
  async borrarProveedor(id) {
    const url = "http://localhost:8080/proveedor/" + id;
    const response = await fetch(url || urlHeroku + "/proveedor/" + id, {
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
    const response = await fetch(url || urlHeroku + "/proveedor", {
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
    const response = await fetch(url || urlHeroku + "/proveedor/" + id, {
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
    const response = await fetch(url || urlHeroku + "/proveedor/" + id, {
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
    const response = await fetch(
      url || urlHeroku + "/proveedor/" + id + "/producto/" + page,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  },
  async obtenerCategoriasPorIdProveedor(id) {
    const url = "http://localhost:8080/proveedor/" + id + "/categoria";
    const response = await fetch(
      url || urlHeroku + "/proveedor/" + id + "/categoria",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  },
  async eliminarCategoriaDeProveedor(idProveedor, idCategoria) {
    const url =
      "http://localhost:8080/proveedor/" +
      idProveedor +
      "/categoria/" +
      idCategoria;
    const response = await fetch(
      url ||
        urlHeroku + "/proveedor/" + idProveedor + "/categoria/" + idCategoria,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response;
  },
  async obtenerCategorias() {
    const url = "http://localhost:8080/categoria/";
    const response = await fetch(url || urlHeroku + "/categoria", {
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
    const response = await fetch(
      url ||
        urlHeroku + "proveedor/" + idProveedor + "/categoria/" + idCategoria,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return await response;
  },
};

export default ProveedoresService;
