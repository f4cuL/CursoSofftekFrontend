let urlHeroku = "https://retail-facu-sofftek-backend.herokuapp.com";
//let urlHeroku = "http://localhost:8080";
const ClienteService = {
  async obtenerClientes() {
    const url = "http://localhost:8080/usuario/cliente";
    const response = await fetch(urlHeroku + "/usuario/cliente" || url, {
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
