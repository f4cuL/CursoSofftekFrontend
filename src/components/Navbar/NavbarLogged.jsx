import alertify from "alertifyjs";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarLogged = ({ setIsLogged }) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          ¡Bienvenido!
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/carrito"
                className="nav-link"
                activeClassName="active"
              >
                Carrito
              </NavLink>
            </li>
            <a
              className="nav-link"
              activeClassName="active"
              onClick={() => {
                localStorage.removeItem("token");
                alertify.alert("Aviso", "Se ha cerrado la sesión");
                setIsLogged(false);
                navigate("/");
              }}
            >
              Logout
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLogged;
