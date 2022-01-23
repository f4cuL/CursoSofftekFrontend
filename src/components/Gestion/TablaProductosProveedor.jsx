import React from "react";
import alertify from "alertifyjs";
import productosService from "../../services/ProductosService";
import EditarProducto from "./EditarProducto";
import { useState } from "react";

const TablaProductosProveedor = ({ productos, update }) => {
  const handleButtonDelete = (id) => {
    alertify.confirm(
      "¿Estas seguro?",
      "Se eliminará el producto",
      function () {
        productosService.borrarProducto(id).then(() => {
          alertify.success("Producto eliminado");
          update();
        });
      },
      function () {
        alertify.error("Cancelado");
      }
    );
  };
  const [producto, setProducto] = useState({});
  const handleEditProducto = (prod) => {
    setProducto(prod);
  };
  return (
    <div>
      <EditarProducto
        productoEditar={producto}
        update={update}
      ></EditarProducto>
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.listaProductos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precioProducto}</td>
                <td>{producto.stock}</td>
                <td>
                  <button onClick={() => handleButtonDelete(producto.id)}>
                    <img
                      src="https://www.pngrepo.com/download/79440/delete-button.png"
                      height="20px"
                      alt="borrar"
                    />
                  </button>
                  <button
                    data-toggle="modal"
                    data-target="#modalProveedor"
                    onClick={() => handleEditProducto(producto)}
                  >
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png"
                      height="20px"
                      alt="editar"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaProductosProveedor;
