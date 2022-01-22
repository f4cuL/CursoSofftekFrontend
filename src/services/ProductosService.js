
const productosService = {
    async obtenerProductos() {
        const url = "http://localhost:8080/producto";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}

export default productosService;