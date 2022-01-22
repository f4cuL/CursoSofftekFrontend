import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return <div className='d-flex justify-content-center '>
            <form className='p-5 mt-3 border border-dark rounded '> 
                <div class="form-group">
                    <label for="exampleInputEmail1">Usuario</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese usuario" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Link to="/registrar"><small id="emailHelp" class="form-text text-muted mb-2">¿No tienes cuenta? Presiona aqui para registrar.</small></Link>
                <div className='d-flex justify-content-center'>
                <input type="button" className='btn btn-primary' value="Iniciar sesión" disabled="true" />
                </div>
            </form>
    </div>;
};

export default Login;
