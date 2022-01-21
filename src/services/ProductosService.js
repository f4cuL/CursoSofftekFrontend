
const productosService = {
    async obtenerProductos(id) {
        const url = "http://localhost:8080/producto/"+id;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }});
        const datos = await response.json();
    }
}

export default productosService;