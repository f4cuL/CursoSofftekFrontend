import TablaProducto from "./components/TablaProducto";
import { useState } from "react";
import { useEffect } from "react";
import NavbarNotLogged from "./components/Navbar/NavbarNotLogged";
import NavbarLogged from "./components/Navbar/NavbarLogged";
import NavbarAdmin from "./components/Navbar/NavbarAdmin";
import NavbarEmpleado from "./components/Navbar/NavbarEmpleado";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [productos, setProductos] = useState([]);

  const [isLogged, setIsLogged] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [empleado, setEmpleado] = useState(false);

  const obtenerProductos = () => {
    fetch("http://localhost:8080/producto/")
      .then(response => response.json())
      .then(data => setProductos(data))
  }
  useEffect(() => {
    //obtenerProductos();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>

        <input type="button" value={isLogged} onClick={() => {setIsLogged(!isLogged)}}/> <p>Logged</p>
        <input type="button" value={admin} onClick={() => {setAdmin(!admin)}}/> <p>Admin</p>
        <input type="button" value={empleado} onClick={() => {setEmpleado(!empleado)}}/> <p>Empleado</p>

        {!isLogged && <NavbarNotLogged></NavbarNotLogged>}
        {isLogged  && !admin && !empleado && <NavbarLogged></NavbarLogged>}
        {isLogged && admin && <NavbarAdmin></NavbarAdmin>}
        {isLogged && empleado && <NavbarEmpleado></NavbarEmpleado>}

        <Routes>
          <Route path="/" element={<TablaProducto listaProductos={productos}/>} />
          <Route path="/login" element={<hi>Login</hi>} />
          <Route path="/carrito" element={<hi>Carrito</hi>} />
          <Route path="/gestion" element={<hi>Gestion</hi>} />
          <Route path="/panel" element={<hi>Panel</hi>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
