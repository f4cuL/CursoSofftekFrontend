import React from "react";
import TablaProveedores from "./TablaProveedores";

const Gestion = () => {
  return (
    <div className="container mt-5">
      <table class="table table-hover table-dark mb-0">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center mb-0">
              Gestionar proveedores
            </td>
          </tr>
        </tbody>
      </table>
      <TablaProveedores />
      <table class="table table-hover table-dark">
        <tbody>
          <tr>
            <td className="d-flex justify-content-center">Gestionar ordenes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gestion;
