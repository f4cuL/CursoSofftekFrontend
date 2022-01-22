const ProveedoresService = {
    async obtenerProveedores() {
        const url = "http://localhost:8080/proveedor";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    async borrarProveedor(id) {
        const url = "http://localhost:8080/proveedor/"+id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response;
    }
}

export default ProveedoresService;