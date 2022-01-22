import AgregarProveedor from "../components/Gestion/AgregarProveedor";

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
    },
    async agregarProveedor(data) {
        const url = "http://localhost:8080/proveedor";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response;
    }
}

export default ProveedoresService;