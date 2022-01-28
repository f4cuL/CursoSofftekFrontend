let urlHeroku = "https://retail-facu-sofftek-backend.herokuapp.com";
//let urlHeroku = "http://localhost:8080";
const UsuarioService = {
  async registrarUsuario(datos) {
    const url = "http://localhost:8080/usuario/registrar";
    const response = await fetch(urlHeroku + "/usuario/registrar" || url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    return response;
  },
  async iniciarSesion(datos) {
    const url = "http://localhost:8080/usuario/login";
    const response = await fetch(urlHeroku + "/usuario/login" || url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    return response;
  },
  async crearCarrito(datos) {
    const url = "http://localhost:8080/cliente/checkout";
    const response = await fetch(urlHeroku + "/cliente/checkout" || url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify(datos),
    });
    return response;
  },
};

export default UsuarioService;
