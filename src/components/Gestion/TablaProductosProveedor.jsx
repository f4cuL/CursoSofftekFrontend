import React from "react";

const TablaProductosProveedor = ({ productos }) => {
  console.log(productos.listaProductos);
  return (
    <div className="container">
      {productos.listaProductos.map((producto) => (
        <h1>producto.nombreProducto</h1>
      ))}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Cuit</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductosProveedor;
