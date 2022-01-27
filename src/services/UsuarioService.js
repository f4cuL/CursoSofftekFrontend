let urlHeroku = process.env.REACT_APP_URL;
const UsuarioService = {
  async registrarUsuario(datos) {
    const url = "http://localhost:8080/usuario/registrar";
    const response = await fetch(url || urlHeroku + "/usuario/registrar", {
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
    const response = await fetch(url || urlHeroku + "/usuario/login", {
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
    const response = await fetch(url || urlHeroku + "/cliente/checkout", {
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
