import React from "react";
import ProveedoresService from "../../services/ProveedoresService";
import { useState } from "react";
import { useEffect } from "react";
import alertify from "alertifyjs";

const TablaProveedorCategorias = ({ idProveedor }) => {
  const [categorias, setCategorias] = useState([]);
  const actualizarCategorias = () => {
    ProveedoresService.obtenerCategoriasPorIdProveedor(idProveedor).then(
      (data) => setCategorias(data)
    );
  };
  const handleDelete = (idCategoria) => {
    alertify.confirm(
      "Se quitara la categoria seleccionada",
      "¿Estás seguro?",
      function () {
        ProveedoresService.eliminarCategoriaDeProveedor(
          idProveedor,
          idCategoria
        )
          .then(() => actualizarCategorias())
          .then(() => alertify.success("Eliminada"));
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  useEffect(() => {
    actualizarCategorias();
  }, []);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr>
              <td className="w-90">{categoria.nombreCategoria}</td>
              <td className="w-10">
                <button onClick={() => handleDelete(categoria.id)}>
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

export default TablaProveedorCategorias;
