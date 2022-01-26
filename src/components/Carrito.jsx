import React from "react";
import TablaCarrito from "./TablaCarrito";

const Carrito = ({ listaProductos, quitar }) => {
  return (
    <div>
      <TablaCarrito
        listaProductos={listaProductos}
        quitar={quitar}
      ></TablaCarrito>
    </div>
  );
};

export default Carrito;
