const ClienteService = {
  async obtenerClientes() {
    const url = "http://localhost:8080/usuario/cliente";
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
};
export default ClienteService;
