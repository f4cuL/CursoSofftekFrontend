import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ProveedoresService from "../../services/ProveedoresService";
import TablaProductosProveedor from "./TablaProductosProveedor";
import AgregarProductoAProveedor from "./AgregarProductoAProveedor";
import TablaProveedorCategorias from "./TablaProveedorCategorias";

const GestionProveedores = () => {
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [number, setNumber] = useState(0);
  const id = location.state;

  const updateProductosPage = (number) => {
    ProveedoresService.obtenerProductoProveedorPorIDPaginated(id, number).then(
      (data) => {
        setProductos(data.content);
        setPagination(data);
      }
    );
  };
  useEffect(() => {
    //updateProductos();
    updateProductosPage(0);
  }, []);

  return (
    <div className="container mt-5">
      <table class="table table-hover table-dark mb-0">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center">
              Gestionar Categorias
            </td>
          </tr>
        </tbody>
      </table>
      <TablaProveedorCategorias idProveedor={id} />
      <table className="table table-hover table-dark mb-0">
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
        update={updateProductosPage}
        number={number}
      ></AgregarProductoAProveedor>
      <TablaProductosProveedor
        productos={productos}
        pagination={pagination}
        update={updateProductosPage}
        number={setNumber}
        numero={number}
      ></TablaProductosProveedor>
    </div>
  );
};

export default GestionProveedores;
