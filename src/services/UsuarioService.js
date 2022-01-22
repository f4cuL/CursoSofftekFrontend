
const UsuarioService = {
    async registrarUsuario(datos) {
        const url = "http://localhost:8080/usuario/registrar";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(datos)
        });
        return response;
    },
    async iniciarSesion(datos) {
        const url = "http://localhost:8080/usuario/login";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(datos)
        });
        return response;
    }
}

export default UsuarioService;