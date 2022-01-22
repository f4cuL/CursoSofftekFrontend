import alertify from 'alertifyjs';
import React from 'react';
import { useState } from 'react';
import ProveedoresService from '../../services/ProveedoresService';

const AgregarProveedor = ({ update }) => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cuit, setCuit] = useState("");
    const handleButton = () => {
        const proveedor = { nombre, direccion, cuit }
        ProveedoresService.agregarProveedor(proveedor).then((response) => {
            if (response.status === 400){
                alertify.error("Error, datos invalidos")
            }else{
                alertify.success("Proveedor agregado")
                update()
            }
        })
    }
    return <div className='container border border-dark pt-2'>
        <button className='mb-2' data-toggle="collapse" data-target="#agregar" aria-expanded="false" aria-controls="collapseExample" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png" height="20px" alt="" srcset="" /></button>
        <div class="collapse" id="agregar">
            <form >
                <div class="form-group">
                    <label for="inputNombre">Nombre de proveedor</label>
                    <input class="form-control form-control-sm" type="text" placeholder="Nombre" id='inputNombre' value={nombre} onChange={(input) => setNombre(input.target.value)} />

                </div>
                <div class="form-group">
                    <label for="direccion">Dirección</label>
                    <input class="form-control form-control-sm" type="text" placeholder="Dirección" id='direccion' value={direccion} onChange={(input) => setDireccion(input.target.value)} />
                </div>
                <div class="form-group">
                    <label for="cuit">Cuit</label>
                    <input class="form-control form-control-sm" type="number" placeholder="Cuit" id='cuit' value={cuit} onChange={(input) => setCuit(input.target.value)} />
                </div>
            </form>
            <input type="button" className='btn btn-dark mb-2' value="Agregar" onClick={handleButton} />

        </div>
    </div>;
};

export default AgregarProveedor;
