import React from "react";
import ProveedoresService from "../../services/ProveedoresService";
import { useState } from "react";
import { useEffect } from "react";
import alertify from "alertifyjs";

const TablaProveedorCategorias = ({ idProveedor }) => {
  const [categorias, setCategorias] = useState([]);
  const [allCategorias, setAllCategorias] = useState([]);
  const [seleccion, setSeleccion] = useState("");
  const actualizarCategorias = () => {
    ProveedoresService.obtenerCategoriasPorIdProveedor(idProveedor).then(
      (data) => setCategorias(data)
    );
  };

  const obtenerCategorias = () => {
    ProveedoresService.obtenerCategorias().then((data) =>
      data.json().then((data) => setAllCategorias(data))
    );
  };

  const handleAgregar = () => {
    ProveedoresService.agregarCategoriaAProveedor(idProveedor, seleccion).then(
      () => actualizarCategorias()
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
    obtenerCategorias();
  }, []);

  return (
    <div className="container bg-white pb-2">
      <select
        onChange={(input) => setSeleccion(input.target.value)}
        class="form-select form-select-lg m-3"
        aria-label=".form-select-sm example"
      >
        <option selected value="">
          Elige categoría
        </option>
        {allCategorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombreCategoria}
          </option>
        ))}
      </select>
      <button className="btn-sm btn-dark p-1 ml-2" onClick={handleAgregar}>
        Agregar
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
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
