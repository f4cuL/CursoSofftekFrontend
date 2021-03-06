import React from "react";
import { useState } from "react";
import UsuarioService from "../../services/UsuarioService";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
  const navigate = useNavigate();
  const [valueTipo, setValueTipo] = useState(0);
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNombre, setInputNombre] = useState("");
  const [inputApellido, setInputApellido] = useState("");
  const [inputRazon, setInputRazon] = useState("");
  const [valueDni, setValueDni] = useState("");
  const [formControlDni, setFormControlDni] = useState("form-control");
  const [claseUsuario, setClaseUsuario] = useState("form-control");
  const [clasePassword, setclasePassword] = useState("form-control");
  const [claseNombre, setclaseNombre] = useState("form-control");
  const [claseApellido, setClaseApellido] = useState("form-control");
  const [claseRazon, setClaseRazon] = useState("form-control");
  const inputs = [
    inputUsuario,
    inputPassword,
    inputNombre,
    inputApellido,
    inputRazon,
    valueDni,
  ];
  const inputsSet = [
    setInputUsuario,
    setInputPassword,
    setInputNombre,
    setInputApellido,
    setInputRazon,
  ];
  const setters = [
    setClaseUsuario,
    setclasePassword,
    setclaseNombre,
    setClaseApellido,
    setClaseRazon,
  ];
  const handleError400 = () => {
    if (valueDni === "" || valueDni.length < 8) {
      setFormControlDni("form-control is-invalid");
    }
    alertify.error("Verifica los datos nuevamente");
    for (let i in inputs) {
      if (inputs[i] === "") {
        setters[i]("form-control is-invalid");
      } else {
        setters[i]("form-control is-valid");
      }
    }
  };
  const registroExitoso = () => {
    alertify.success("Registrado con éxito");
    navigate("/login");
  };
  const handleClickRegister = () => {
    const datos = {
      username: inputUsuario,
      password: inputPassword,
      nombre: inputNombre,
      apellido: inputApellido,
      razonSocial: inputRazon,
      dni: valueDni,
      tipoCliente: valueTipo,
    };
    UsuarioService.registrarUsuario(datos).then((response) =>
      response.status === 400 ? handleError400() : registroExitoso()
    );
  };

  const handleDni = (dni) => {
    setValueDni(dni);
    setFormControlDni("form-control");
    if (dni <= 0) {
      setFormControlDni("form-control is-invalid");
    }
    if (dni.length > 8) {
      setFormControlDni("form-control is-invalid");
    }
    if (dni.length === 8) {
      setFormControlDni("form-control is-valid");
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="rounded border border-dark p-4 m-4 bg-white">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputUsuario">Usuario</label>
            <input
              type="text"
              className={claseUsuario}
              id="inputUsuario"
              placeholder="Usuario"
              value={inputUsuario}
              onChange={(input) => setInputUsuario(input.target.value)}
            />
            <div class="invalid-feedback">El usuario no puede estar vacio</div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              className={clasePassword}
              id="inputPassword4"
              placeholder="Password"
              value={inputPassword}
              onChange={(input) => setInputPassword(input.target.value)}
            />
            <div class="invalid-feedback">
              La contraseña no puede estar vacia
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputNombre">Nombre</label>
            <input
              type="text"
              className={claseNombre}
              id="inputNombre"
              placeholder="Nombre"
              value={inputNombre}
              onChange={(input) => setInputNombre(input.target.value)}
            />
            <div class="invalid-feedback">El nombre no puede estar vacio</div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputApellido">Apellido</label>
            <input
              type="text"
              className={claseApellido}
              id="inputApellido"
              placeholder="Apellido"
              value={inputApellido}
              onChange={(input) => setInputApellido(input.target.value)}
            />
            <div class="invalid-feedback">El apellido no puede estar vacio</div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputRazon">Razón social</label>
            <input
              type="text"
              className={claseRazon}
              id="inputRazon"
              value={inputRazon}
              onChange={(input) => setInputRazon(input.target.value)}
            />
            <div class="invalid-feedback">
              La razón social no puede estar vacia
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputDni">Dni</label>
            <input
              type="number"
              class={formControlDni}
              id="inputDni"
              value={valueDni}
              onChange={(input) => handleDni(input.target.value)}
            />
            <div class="invalid-feedback">
              El dni no debe ser menor o mayor a 8
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Tipo</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => setValueTipo(e.target.value)}
            >
              <option value="0">Particular</option>
              <option value="1">Empresa</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-dark pl-5 pr-5 "
            onClick={() => handleClickRegister()}
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrar;
