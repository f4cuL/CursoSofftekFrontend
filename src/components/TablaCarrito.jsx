import React from "react";

const TablaCarrito = ({ listaProductos, quitar }) => {
  const handleDelete = (id) => {
    quitar(id);
  };
  return (
    <div className="container mt-2">
      <button onClick={() => console.log(listaProductos)}></button>
      <table class="table table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Quitar</th>
          </tr>
        </thead>
        <tbody>
          {listaProductos.map((data) => (
            <tr key={data.id}>
              <td className="w-25"> {data.nombreProducto}</td>
              <td className="w-25">{data.precioProducto}</td>
              <td className="w-25">{data.stock}</td>
              <td className="w-25">
                <button
                  className="btn btn-ligth"
                  onClick={() => handleDelete(data.id)}
                >
                  Quitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCarrito;
