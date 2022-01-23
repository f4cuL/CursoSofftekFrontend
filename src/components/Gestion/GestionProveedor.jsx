import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ProveedoresService from "../../services/ProveedoresService";
import TablaProductosProveedor from "./TablaProductosProveedor";
import AgregarProductoAProveedor from "./AgregarProductoAProveedor";

const GestionProveedores = () => {
  const location = useLocation();
  const [productos, setProductos] = useState({ listaProductos: [] });
  const id = location.state;
  const updateProductos = () => {
    ProveedoresService.obtenerProveedorPorID(id).then((response) =>
      response.json().then((data) => setProductos(data))
    );
  };
  useEffect(() => {
    updateProductos();
  }, []);

  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center">
              Gestionar productos
            </td>
          </tr>
        </tbody>
      </table>
      <AgregarProductoAProveedor
        idProveedor={id}
        update={updateProductos}
      ></AgregarProductoAProveedor>
      <TablaProductosProveedor
        productos={productos}
        update={updateProductos}
      ></TablaProductosProveedor>
    </div>
  );
};

export default GestionProveedores;
