import React from "react";
import PaginadorProveedor from "./PaginadorProveedor";
import TablaProveedores from "./TablaProveedores";

const Gestion = () => {
  return (
    <div className="container mt-5">
      <table class="table table-hover table-dark">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center">
              Gestionar proveedores
            </td>
          </tr>
        </tbody>
      </table>
      <TablaProveedores />
      <table class="table table-hover table-dark">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center">
              Gestionar promociones
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gestion;
