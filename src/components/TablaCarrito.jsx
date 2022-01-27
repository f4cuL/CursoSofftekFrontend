import alertify from "alertifyjs";
import React from "react";
import UsuarioService from "../services/UsuarioService";
import { useNavigate } from "react-router-dom";

const TablaCarrito = ({
  listaProductos,
  quitar,
  setListaProducto,
  number,
  update,
}) => {
  const handleDelete = (id) => {
    quitar(id);
  };
  const navigate = useNavigate();
  const handleComprar = () => {
    UsuarioService.crearCarrito(listaProductos).then((data) => {
      if (data.status === 500) {
        alertify.error("Debes iniciar sesión para realizar la compra");
        navigate("/login");
      } else {
        alertify.success("Compra realizada con éxito");
        setListaProducto([]);
        navigate("/");
        update(number);
      }
    });
  };
  return (
    <div className="container mt-2">
      {listaProductos.length === 0 ? (
        <div className="border border-danger rounded p-2 bg-danger">
          <div className="d-flex justify-content-center">
            <h1 class="fs-1 flex-column text-white">El carrito está vacio</h1>
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="d-flex justify-content-center"
              src="http://cdn.onlinewebfonts.com/svg/img_133483.png"
              alt="warning"
              height="80px"
              srcset=""
            />
          </div>
        </div>
      ) : (
        <div>
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
          <div className=" d-flex justify-content-center">
            <input
              type="button"
              className="btn btn-primary"
              value="Comprar"
              onClick={handleComprar}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaCarrito;
