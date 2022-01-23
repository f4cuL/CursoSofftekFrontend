import React from "react";

const TablaProductosProveedor = ({ productos }) => {
  console.log(productos.listaProductos);
  return (
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
                <button>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png"
                    height="20px"
                    alt="editar"
                  />
                </button>
                <button>
                  <img
                    src="https://www.pngrepo.com/download/79440/delete-button.png"
                    height="20px"
                    alt="borrar"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductosProveedor;
