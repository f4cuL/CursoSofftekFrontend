import React, { useEffect } from "react";
import { useState } from "react";
import ProveedoresService from "../../services/ProveedoresService";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import AgregarProveedor from "./AgregarProveedor";
import EditarProveedor from "./EditarProveedor";
import { Link } from "react-router-dom";
import PaginadorProveedor from "./PaginadorProveedor";

const TablaProveedores = () => {
  const MY_ROUTE = "/gestion/proveedor/:id";
  const [proveedores, setProveedores] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [number, setNumber] = useState(0);
  const obtenerProveedoresPag = (number) =>
    ProveedoresService.obtenerProveedoresPag(number).then((data) => {
      setProveedores(data.content);
      setPagination(data);
    });

  const [proveedorEdit, setProveedorEdit] = useState({
    nombre: "",
    direccion: "",
    cuit: "",
    id: "",
  });
  useEffect(() => {
    obtenerProveedoresPag(0);
  }, []);
  const handleButtonDelete = (id) => {
    alertify.confirm(
      "¿Estas seguro?",
      "Se eliminará el proveedor",
      function () {
        alertify.success("Proveedor eliminado");
        ProveedoresService.borrarProveedor(id).then(() =>
          obtenerProveedoresPag(number)
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
    <div className="bg-white">
      <EditarProveedor
        update={obtenerProveedoresPag}
        number={number}
        proveedorEditar={proveedorEdit}
      ></EditarProveedor>
      <AgregarProveedor
        update={obtenerProveedoresPag}
        number={number}
      ></AgregarProveedor>
      <table class="table table-striped container-fluid mb-0">
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
              <td className="w-25">{prov.nombre}</td>
              <td className="w-25"> {prov.direccion}</td>
              <td className="w-25">{prov.cuit}</td>
              <td className="w-25">
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
                <Link to={MY_ROUTE.replace(":id", prov.id)} state={prov.id}>
                  <input
                    type="button"
                    value="Gestionar"
                    className="btn-sm btn-dark m-1"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginadorProveedor
        pagination={pagination}
        update={obtenerProveedoresPag}
        number={setNumber}
      ></PaginadorProveedor>
    </div>
  );
};

export default TablaProveedores;
