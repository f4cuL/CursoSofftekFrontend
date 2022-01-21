import TablaProducto from "./components/TablaProducto";
import { useState } from "react";
import { useEffect } from "react";
import NavbarBg from "./components/NavbarBg";

function App() {
  const [productos, setProductos] = useState([]);
  const [isLogged, setIsLogged] = useState(true);

  const obtenerProductos = () => {
    fetch("http://localhost:8080/producto/")
    .then(response => response.json())
    .then(data => setProductos(data))
  }
 useEffect(() => {
  obtenerProductos() ;
 }, []);
 
  
  return (
    <div className="App">
      {isLogged && <NavbarBg></NavbarBg>}
     
      <TablaProducto listaProductos={productos}/>
    </div>
  );
}

export default App;
