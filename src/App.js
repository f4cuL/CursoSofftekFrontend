import TablaProducto from "./components/TablaProducto";
import { useState } from "react";
import { useEffect } from "react";
import NavbarNotLogged from "./components/Navbar/NavbarNotLogged";
import NavbarLogged from "./components/Navbar/NavbarLogged";
import NavbarAdmin from "./components/Navbar/NavbarAdmin";
import NavbarEmpleado from "./components/Navbar/NavbarEmpleado";
import Login from "./components/Login/Login";
import GestionProveedores from "./components/Gestion/GestionProveedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrar from "./components/Login/Registrar";
import Gestion from "./components/Gestion/Gestion";
import productosService from "./services/ProductosService";
import PaginadorProductos from "./components/PaginadorProductos";
import Carrito from "./components/Carrito";
import alertify from "alertifyjs";
import GestionCliente from "./components/GestionCliente";
import jwt_decode from "jwt-decode";

function App() {
  const [productos, setProductos] = useState([]);
  const [number, setNumber] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [empleado, setEmpleado] = useState(false);
  const [pagination, setPagination] = useState({});
  const [listaProducto, setListaProducto] = useState([]);

  const agregarProducto = (prod) => {
    let found = false;
    for (let i = 0; i < listaProducto.length; i++) {
      if (listaProducto[i].id === prod.id) {
        found = true;
        alertify.error("Ya tienes este artículo en el carrito");
      }
    }
    if (prod.stock === undefined || prod.stock === "0" || prod.stock < 0) {
      alertify.error("Error, el producto no puede ser 0 o vacio");
    }
    if (!found && prod.stock !== undefined && prod.stock > 0) {
      setListaProducto([...listaProducto, prod]);
      alertify.success("Agregado al carrito");
    }
  };
  const obtenerProductosPage = (num) => {
    productosService.obtenerProductosPage(num).then((response) =>
      response.json().then((data) => {
        setPagination(data);
        setProductos(data.content);
      })
    );
  };
  useEffect(() => {
    obtenerProductosPage(0);
    if (localStorage.token !== undefined) {
      setIsLogged(true);
      let decoded = jwt_decode(localStorage.token);
      console.log(decoded);
      if (decoded.sub == "EMPLEADO") {
        setEmpleado(true);
      }
    }
  }, []);

  const quitar = (id) => {
    for (let i = 0; i < listaProducto.length; i++) {
      if (listaProducto[i].id === id) {
        const nuevaLista = listaProducto.filter((data) => data.id !== id);
        setListaProducto(nuevaLista);
      }
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        {!isLogged && <NavbarNotLogged></NavbarNotLogged>}
        {isLogged && !admin && !empleado && (
          <NavbarLogged setIsLogged={setIsLogged}></NavbarLogged>
        )}
        {isLogged && admin && <NavbarAdmin></NavbarAdmin>}
        {isLogged && empleado && (
          <NavbarEmpleado
            setIsLogged={setIsLogged}
            setEmpleado={setEmpleado}
          ></NavbarEmpleado>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <TablaProducto
                  listaProductos={productos}
                  agregarProducto={agregarProducto}
                />
                <PaginadorProductos
                  update={obtenerProductosPage}
                  pagination={pagination}
                  setNumber={setNumber}
                ></PaginadorProductos>
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setIsLogged={setIsLogged}
                setEmpleado={setEmpleado}
                number={number}
                update={obtenerProductosPage}
              ></Login>
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito
                listaProductos={listaProducto}
                quitar={quitar}
                setListaProducto={setListaProducto}
                number={number}
                update={obtenerProductosPage}
              ></Carrito>
            }
          />
          <Route path="/gestion" element={<Gestion></Gestion>} />
          <Route path="/panel" element={<hi>Panel</hi>} />
          <Route path="/registrar" element={<Registrar />} />
          <Route
            path="/gestion/proveedor/:id"
            element={<GestionProveedores></GestionProveedores>}
          />
          <Route
            path="/cliente/:id"
            element={<GestionCliente></GestionCliente>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
