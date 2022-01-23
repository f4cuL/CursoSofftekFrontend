import React, { useEffect } from "react";
import { useState } from "react";
import ProveedoresService from "../../services/ProveedoresService";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import AgregarProveedor from "./AgregarProveedor";
import EditarProveedor from "./EditarProveedor";
import { Link } from "react-router-dom";

const TablaProveedores = () => {
  const MY_ROUTE = "/gestion/proveedor/:id";
  const [proveedores, setProveedores] = useState([]);
  const actualizarProveedores = () =>
    ProveedoresService.obtenerProveedores().then((proveedoresFetch) =>
      setProveedores(proveedoresFetch)
    );
  const [proveedorEdit, setProveedorEdit] = useState({
    nombre: "",
    direccion: "",
    cuit: "",
    id: "",
  });
  useEffect(() => {
    actualizarProveedores();
  }, []);
  const handleButtonDelete = (id) => {
    alertify.confirm(
      "¿Estas seguro?",
      "Se eliminará el proveedor",
      function () {
        alertify.success("Proveedor eliminado");
        ProveedoresService.borrarProveedor(id).then(() =>
          actualizarProveedores()
        );
      },
      function () {
        alertify.error("Cancelado");
      }
    );
  };
  const handleEdit = (proveedor) => {
    const nombre = proveedor.nombre;
    const direccion = proveedor.direccion;
    const cuit = proveedor.cuit;
    const id = proveedor.id;
    const proovedorSelec = { nombre, direccion, cuit, id };
    setProveedorEdit(proovedorSelec);
  };
  return (
    <div>
      <EditarProveedor
        update={actualizarProveedores}
        proveedorEditar={proveedorEdit}
      ></EditarProveedor>
      <AgregarProveedor update={actualizarProveedores}></AgregarProveedor>
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
          {proveedores.map((prov) => (
            <tr key={prov.id}>
              <td>{prov.nombre}</td>
              <td>{prov.direccion}</td>
              <td>{prov.cuit}</td>
              <td>
                <button onClick={() => handleButtonDelete(prov.id)}>
                  <img
                    src="https://www.pngrepo.com/download/79440/delete-button.png"
                    height="20px"
                    alt="borrar"
                  />
                </button>
                <button
                  onClick={() => handleEdit(prov)}
                  data-toggle="modal"
                  data-target="#modalProveedor"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png"
                    height="20px"
                    alt="editar"
                  />
                </button>
              </td>
              <td>
                <Link to={MY_ROUTE.replace(":id", prov.id)} state={prov.id}>
                  <input
                    type="button"
                    value="Productos"
                    className="btn btn-dark"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProveedores;
