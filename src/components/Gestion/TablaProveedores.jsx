import React, { useEffect } from 'react';
import { useState } from 'react';
import ProveedoresService from '../../services/ProveedoresService';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const TablaProveedores = () => {
    const [proveedores, setProveedores] = useState([]);
    const actualizarProveedores =  () =>  ProveedoresService.obtenerProveedores().then((proveedoresFetch)=>setProveedores(proveedoresFetch));
    useEffect(() => {
      actualizarProveedores();
    }, []);
    const handleButtonDelete = (id) =>{
        alertify.confirm('¿Estas seguro?', 'Se eliminará el proveedor', function(){ alertify.success('Proveedor eliminado'); ProveedoresService.borrarProveedor(id).then(()=>actualizarProveedores()); }
                , function(){ alertify.error('Cancelado')});
            
    }
    return <div>
        <h1>Hola</h1>
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
                            <td><button onClick={()=>handleButtonDelete(prov.id)}><img src="https://www.pngrepo.com/download/79440/delete-button.png" height="20px" alt="borrar" /></button> <button><img src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" height="20px" alt="editar"/></button></td>
                        </tr>)}
            </tbody>
        </table>
    </div>;
};

export default TablaProveedores;
