import React from 'react';
import { useState } from 'react';

const Registrar = () => {
    const [valueTipo, setValueTipo] = useState(0);
    const [inputUsuario, setInputUsuario] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [valueDni, setValueDni] = useState("");
    const [formControlDni, setFormControlDni] = useState("form-control");
    const handleDni = (dni) => {
        setValueDni(dni);
        setFormControlDni("form-control");
        if (dni < 0) {
            setFormControlDni("form-control is-invalid");
        }
        if (dni.length > 8) {
            setFormControlDni("form-control is-invalid");
        }
        if (dni.length === 8) {
            setFormControlDni("form-control is-valid");
        }
    }
    return <div className="d-flex justify-content-center">
        <form className='rounded border border-dark p-4 m-4'>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputUsuario">Usuario</label>
                    <input type="text" class="form-control" id="inputUsuario" placeholder="Usuario" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputNombre">Nombre</label>
                    <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputApellido">Apellido</label>
                    <input type="text" class="form-control" id="inputApellido" placeholder="Apellido" />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputRazon">Razon social</label>
                    <input type="text" class="form-control" id="inputRazon" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputDni">Dni</label>
                    <input type="number" class={formControlDni} id="inputDni" max="5" value={valueDni}
                        onChange={(input) => handleDni(input.target.value)} />
                    <h1></h1>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Tipo</label>
                    <select class="form-control" id="exampleFormControlSelect1" onChange={(e) => setValueTipo(e.target.value)}>
                        <option value="0">Particular</option>
                        <option value="1">Empresa</option>
                    </select>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" class="btn btn-primary pl-5 pr-5 disabled" disabled="true">Registrar</button>
            </div>
        </form>
    </div>;
};

export default Registrar;
