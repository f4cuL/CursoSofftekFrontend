import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import UsuarioService from "../../services/UsuarioService";
import alertify from "alertifyjs";
import jwt_decode from "jwt-decode";

const Login = ({ setIsLogged, setEmpleado }) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const iniciarSesion = () => {
    const usuarioInputs = {
      username: usuario,
      password: password,
    };
    UsuarioService.iniciarSesion(usuarioInputs).then((response) => {
      if (response.status === 400) {
        alertify.error("Error");
      } else {
        response.text().then((data) => {
          if (data == "ERROR") {
            alertify.error("No existe ese usuario");
          } else if (data === "BADPASSWORD") {
            alertify.error("Contraseña erronea");
          } else {
            alertify.success("Loggeado con éxito");
            localStorage.token = data;
            setIsLogged(true);
            let decoded = jwt_decode(localStorage.token);
            if (decoded.sub == "EMPLEADO") {
              setEmpleado(true);
            }
            navigate("/");
          }
        });
      }
    });
  };
  return (
    <div className="d-flex justify-content-center ">
      <form className="p-5 mt-3 border border-dark rounded bg-white">
        <div class="form-group">
          <label for="exampleInputEmail1">Usuario</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingrese usuario"
            onChange={(input) => setUsuario(input.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(input) => setPassword(input.target.value)}
          />
        </div>
        <Link to="/registrar">
          <small id="emailHelp" class="form-text text-muted mb-2">
            ¿No tienes cuenta? Presiona aqui para registrar.
          </small>
        </Link>
        <div className="d-flex justify-content-center">
          <input
            type="button"
            className="btn btn-dark"
            value="Iniciar sesión"
            onClick={iniciarSesion}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
