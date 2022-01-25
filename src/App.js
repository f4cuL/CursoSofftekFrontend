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

function App() {
  const [productos, setProductos] = useState([]);
  const [number, setNumber] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [empleado, setEmpleado] = useState(false);
  const [pagination, setPagination] = useState({});

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
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="d-flex">
          <input
            type="button"
            value={isLogged}
            onClick={() => {
              setIsLogged(!isLogged);
            }}
          />
          <p>Logged</p>
          <input
            type="button"
            value={admin}
            onClick={() => {
              setAdmin(!admin);
            }}
          />
          <p>Admin</p>
          <input
            type="button"
            value={empleado}
            onClick={() => {
              setEmpleado(!empleado);
            }}
          />
          <p>Empleado</p>
        </div>
        {!isLogged && <NavbarNotLogged></NavbarNotLogged>}
        {isLogged && !admin && !empleado && <NavbarLogged></NavbarLogged>}
        {isLogged && admin && <NavbarAdmin></NavbarAdmin>}
        {isLogged && empleado && <NavbarEmpleado></NavbarEmpleado>}

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <TablaProducto listaProductos={productos} />
                <PaginadorProductos
                  update={obtenerProductosPage}
                  pagination={pagination}
                  setNumber={setNumber}
                ></PaginadorProductos>
              </div>
            }
          />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/carrito" element={<hi>Carrito</hi>} />
          <Route path="/gestion" element={<Gestion></Gestion>} />
          <Route path="/panel" element={<hi>Panel</hi>} />
          <Route path="/registrar" element={<Registrar />} />
          <Route
            path="/gestion/proveedor/:id"
            element={<GestionProveedores></GestionProveedores>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
