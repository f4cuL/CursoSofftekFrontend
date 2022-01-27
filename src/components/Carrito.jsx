import React from "react";
import TablaCarrito from "./TablaCarrito";

const Carrito = ({
  listaProductos,
  quitar,
  setListaProducto,
  number,
  update,
}) => {
  return (
    <div>
      <TablaCarrito
        listaProductos={listaProductos}
        quitar={quitar}
        setListaProducto={setListaProducto}
        number={number}
        update={update}
      ></TablaCarrito>
    </div>
  );
};

export default Carrito;
