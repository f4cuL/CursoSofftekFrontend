import alertify from 'alertifyjs';
import React from 'react';
import { useState } from 'react';
import ProveedoresService from '../../services/ProveedoresService';

const EditarProveedor = ({ proveedorEditar, update }) => {


    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cuit, setCuit] = useState("");
    const handleChanges = () => {
        const proveedor = {nombre,direccion,cuit};
        ProveedoresService.editarProveedor(proveedor,proveedorEditar.id).then((response)=>{
            if (response.status===400){
                alertify.error("Error");
            }else{
                update();
                setNombre("");
                setDireccion("");
                setCuit("");
            }
        });
    }

    return <div>
        <div class="modal fade" id="modalProveedor" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Modificar proveedor</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="nombre">Nombre anterior : {proveedorEditar.nombre}</label>
                                <input type="text" class="form-control form-control-sm mb-1" id="nombre" value={nombre} onChange={(input) => setNombre(input.target.value)} />
                                <label for="direccion">Direccion anterior : {proveedorEditar.direccion} </label>
                                <input class="form-control form-control-sm mb-1" type="text" id="direccion" value={direccion} onChange={(input) => setDireccion(input.target.value)} />
                                <label for="cuit">CUIT anterior : {proveedorEditar.cuit}</label>
                                <input class="form-control form-control-sm mb-1" type="text" id="cuit" value={cuit} onChange={(input) => setCuit(input.target.value)} />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => {
                            setNombre("");
                            setDireccion("");
                            setCuit("");
                        }}>Cerrar</button>
                        <button type="button" class="btn btn-dark" data-dismiss="modal" onClick={handleChanges}>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default EditarProveedor;
