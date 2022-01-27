import React from "react";

const TablaProducto = ({ listaProductos, agregarProducto }) => {
  const listaFiltrada = listaProductos.filter((producto) => producto.stock > 0);
  return (
    <div className="container p-0 mt-2 bg-white border border-dark">
      <form></form>
      <table className="table table-striped mb-0">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Agregar</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((producto, index) => (
            <tr key={producto.id}>
              <td className="w-25">{producto.nombreProducto}</td>
              <td className="w-25">${producto.precioProducto}</td>
              <td className="w-25">{producto.stock}</td>
              <th>
                <input
                  type="number"
                  min="1"
                  max="50"
                  step="1"
                  onkeydown="return false"
                  onChange={(input) => {
                    if (input.target.value > producto.stock) {
                      input.target.value = producto.stock;
                      producto.totalStock = producto.stock;
                    } else if (input.target.value < 0) {
                      input.target.value = 1;
                    } else {
                      producto.totalStock = input.target.value;
                    }
                  }}
                />
              </th>
              <th>
                <button
                  onClick={() =>
                    agregarProducto({
                      id: producto.id,
                      nombreProducto: producto.nombreProducto,
                      precioProducto: producto.precioProducto,
                      stock: producto.totalStock,
                    })
                  }
                >
                  <img
                    src="https://image.flaticon.com/icons/png/512/107/107831.png"
                    alt="carrito"
                    width="20px"
                  />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProducto;
