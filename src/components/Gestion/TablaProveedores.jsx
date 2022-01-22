import React, { useEffect } from 'react';
import { useState } from 'react';
import ProveedoresService from '../../services/ProveedoresService';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import AgregarProveedor from './AgregarProveedor';
import EditarProveedor from './EditarProveedor';

const TablaProveedores = () => {
    const [proveedores, setProveedores] = useState([]);
    const actualizarProveedores = () => ProveedoresService.obtenerProveedores().then((proveedoresFetch) => setProveedores(proveedoresFetch));
    const [proveedorEdit, setProveedorEdit] = useState({
        "nombre" : "",
        "direccion" : "",
        "cuit" : ""
    });
    useEffect(() => {
        actualizarProveedores();
    }, []);
    const handleButtonDelete = (id) => {
        alertify.confirm('¿Estas seguro?', 'Se eliminará el proveedor', function () { alertify.success('Proveedor eliminado'); ProveedoresService.borrarProveedor(id).then(() => actualizarProveedores()); }
            , function () { alertify.error('Cancelado') });

    }
    const handleEdit = (proveedor) =>{
        const nombre = proveedor.nombre;
        const direccion = proveedor.direccion;
        const cuit = proveedor.cuit;
        const proovedorSelec={nombre, direccion, cuit};
        setProveedorEdit(proovedorSelec);
    }
    return <div>
        <EditarProveedor proveedorEditar={proveedorEdit}></EditarProveedor>
        <AgregarProveedor update={actualizarProveedores}></AgregarProveedor>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Cuit</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {proveedores.map((prov, index) =>
                    <tr key={index}>
                        <td>{prov.nombre}</td>
                        <td>{prov.direccion}</td>
                        <td>{prov.cuit}</td>
                        <td><button onClick={() => handleButtonDelete(prov.id)}><img src="https://www.pngrepo.com/download/79440/delete-button.png" height="20px" alt="borrar" /></button> <button onClick={()=>handleEdit(prov)} data-toggle="modal" data-target="#modalProveedor"><img src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" height="20px" alt="editar" /></button></td>
                    </tr>)}
            </tbody>
        </table>
    </div>;
};

export default TablaProveedores;
