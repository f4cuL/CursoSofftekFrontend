import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const GestionCliente = () => {
  const location = useLocation();
  const [listaProductos, setListaProductos] = useState([]);
  const lista = location.state;
  return (
    <div className="container mt-2">
      {lista.length === 0 ? (
        <h1 className="bg-danger d-flex justify-content-center p-2 font-weight-bold text-white">
          El cliente no tiene ordenes
        </h1>
      ) : (
        <table class="table table-striped bg-white">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Fecha generación</th>
              <th scope="col">Fecha entrega</th>
              <th scope="col">Precio total</th>
              <th scope="col">Ver productos</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((orden) => (
              <tr key={orden.id}>
                <td>{orden.id}</td>
                <td>{orden.fechaGeneracion}</td>
                <td>{orden.fechaEntrega}</td>
                <td>${orden.precioTotal}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    onClick={() => setListaProductos(orden.listaDetalle)}
                  >
                    Ver productos
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <button onClick={() => console.log(listaProductos)}>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">PrecioUnitario</th>
                  </tr>
                </thead>
                <tbody>
                  {listaProductos.map((detalle) => (
                    <tr>
                      <td>{detalle.producto.nombreProducto}</td>
                      <td>{detalle.cantidad}</td>
                      <td>${detalle.precioVentaUnitario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionCliente;
