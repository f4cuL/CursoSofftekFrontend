import React from 'react';
import { NavLink } from 'react-router-dom';


const NavbarLogged = () => {
    return <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="/#">¡Bienvenido!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active"> Home </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/carrito" className="nav-link" activeClassName="active"> Carrito </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>;
};

export default NavbarLogged;