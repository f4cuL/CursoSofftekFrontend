import alertify from "alertifyjs";
import React from "react";
import { useState } from "react";
import ProveedoresService from "../../services/ProveedoresService";
import { useEffect } from "react";

const EditarProveedor = ({ proveedorEditar, update, number }) => {
  const [nombre, setNombre] = useState(proveedorEditar.nombre);
  const [direccion, setDireccion] = useState("");
  const [cuit, setCuit] = useState("");
  const handleChanges = () => {
    const proveedor = { nombre, direccion, cuit };
    ProveedoresService.editarProveedor(proveedor, proveedorEditar.id).then(
      (response) => {
        if (response.status === 400) {
          alertify.error("Error");
        } else {
          update(number);
          setNombre("");
          setDireccion("");
          setCuit("");
          alertify.success("Editado");
        }
      }
    );
  };
  useEffect(() => {
    setNombre(proveedorEditar.nombre);
    setDireccion(proveedorEditar.direccion);
    setCuit(proveedorEditar.cuit);
  }, [proveedorEditar.nombre, proveedorEditar.direccion, proveedorEditar.cuit]);

  return (
    <div>
      <div
        class="modal fade"
        id="modalProveedor"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modificar proveedor
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-sm mb-1"
                    id="nombre"
                    value={nombre}
                    onChange={(input) => setNombre(input.target.value)}
                  />
                  <label for="direccion">Direccion</label>
                  <input
                    class="form-control form-control-sm mb-1"
                    type="text"
                    id="direccion"
                    value={direccion}
                    onChange={(input) => setDireccion(input.target.value)}
                  />
                  <label for="cuit">CUIT</label>
                  <input
                    class="form-control form-control-sm mb-1"
                    type="text"
                    id="cuit"
                    value={cuit}
                    onChange={(input) => setCuit(input.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setNombre("");
                  setDireccion("");
                  setCuit("");
                }}
              >
                Cerrar
              </button>
              <button
                type="button"
                class="btn btn-dark"
                data-dismiss="modal"
                onClick={handleChanges}
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProveedor;
